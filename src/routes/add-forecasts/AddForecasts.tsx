import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ForecastsActions, Form } from "./styles";
import { forecastsStore } from "../../store";

type ILocation = {
  lat: number
  lng: number
}

const getLocation: () => Promise<ILocation | null> = async () => {
  if (navigator.geolocation) {
    return await new Promise<ILocation | null>((resolve) => (
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          resolve({
            lat, lng
          })
        },
        function() {
          resolve(null);
        }
      )
    ))
  }

  return null;
}

const AddForecasts = () => {
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState<ILocation | null>()
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();

  const handleSave = useCallback(async () => {
    if (lat && lng) {
      await forecastsStore.registerForecast({ lat, lng });
      navigate('/');
    }
  }, [lat, lng])

  const getUserLocation = useCallback(async () => {
    const location = await getLocation();
    setUserLocation(location);

    if (location?.lat) {
      setLat(location.lat);
    }

    if (location?.lng) {
      setLng(location.lng);
    }
  }, [])

  return (
    <>
      <ForecastsActions>
        <Button onClick={() => getUserLocation()} disabled={userLocation === null || (userLocation && lat === userLocation?.lat && lng === userLocation?.lng)}>
          {userLocation === null ? 'Localização não habilitada' : 'Usar minha localização'}
        </Button>
      </ForecastsActions>
      <Form>
        <Input type="number" label="lat" value={lat || ''} onChange={e => setLat(parseFloat(e.target.value))} />
        <Input type="number" label="lng" value={lng || ''} onChange={e => setLng(parseFloat(e.target.value))} />
      </Form>
      <ForecastsActions>
        <Button onClick={() => navigate('/')} secondary>
          Voltar a lista
        </Button>
        <Button onClick={handleSave} disabled={lat === undefined || lng === undefined}>
          Adicionar local
        </Button>
      </ForecastsActions>
    </>
  )
}

export default AddForecasts;
