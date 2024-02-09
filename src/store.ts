import { makeAutoObservable } from 'mobx';
import { fetchWeatherApi } from 'openmeteo';

interface ILocation {
  lat: number
  lng: number
}

export interface IForecast {
  temperature: number | undefined
  isDay: number | undefined
  rain: number | undefined
  lat: number
  lng: number
}

class ForecastsStore {
  forecasts: IForecast[] = []

  constructor() {
    makeAutoObservable(this);
  }

  async registerForecast({ lat, lng }: ILocation) {
    const forecasts = [...(this.forecasts.filter(item => !(item.lat === lat && item.lng === lng)))];
    const params = {
      latitude: lat,
      longitude: lng,
      current: ["temperature_2m", "is_day", "rain"],
    };
    const url = `${process.env.OPEN_METEO_BASE_URL}forecast`;
    const [response] = await fetchWeatherApi(url, params);
    const current = response.current();
    const forecast = {
      temperature: current?.variables(0)!.value(),
      isDay: current?.variables(1)!.value(),
      rain: current?.variables(2)!.value(),
    }
    forecasts.push({ lat, lng, ...forecast });
    this.forecasts = forecasts;
    localStorage.setItem("forecasts", JSON.stringify(forecasts));
  }

  recoverForecasts() {
    this.forecasts = JSON.parse((localStorage.getItem("forecasts") || '[]') as string)
  }
}

export const forecastsStore = new ForecastsStore();