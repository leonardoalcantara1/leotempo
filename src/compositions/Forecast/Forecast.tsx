import React from "react";
import { ForecastCard } from "./styles";
import { IForecast } from "../../store";

// Images
import DiaSol from './dia-sol.jpg';
import DiaChuva from './dia-chuva.jpg';
import NoiteEstrelada from './noite-estrelada.jpg';
import NoiteChuva from './noite-chuva.jpg';
import { Button } from "../../components/Button";

function validateBg(isDay: number, isRain: number) {
  if (isDay) {
    if (isRain) {
      return DiaChuva;
    }
    return DiaSol;
  }

  if (isRain) {
    return NoiteChuva;
  }

  return NoiteEstrelada;
}

const Forecast: React.FC<IForecast & { onUpdate: () => void }> = ({ lat, lng, isDay = 0, rain = 0, temperature = 0, onUpdate }) => (
  <ForecastCard className={`${isDay ? 'isDay' : ''} ${rain ? 'isRain' : ''}`}>
    <img src={validateBg(isDay, rain)} alt="" className="bg" />
    <div className="lat">
      <small>
        Latitude:
      </small>
      {lat}
    </div>
    <div className="lng">
      <small>
        Longitude:
      </small>
      {lng}
    </div>
    <div className="temperature">
      <small>
        Temperatura:
      </small>
      {parseInt(temperature.toString())}°C
    </div>
    <Button onClick={onUpdate}>
      Atualizar
    </Button>
  </ForecastCard>
)

export default Forecast;
