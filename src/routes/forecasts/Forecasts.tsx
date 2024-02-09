import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { ForecastsActions, ForecastsContainer } from "./styles";
import { observer } from "mobx-react-lite";
import { forecastsStore } from "../../store";
import { Forecast } from "../../compositions/Forecast";

const Forecasts = observer(() => {
  const navigate = useNavigate();

  return (
    <>
      <ForecastsContainer className="empty">
        {forecastsStore.forecasts?.map(forecast => (
          <Forecast {...forecast} onUpdate={() => forecastsStore.registerForecast({ lat: forecast.lat, lng: forecast.lng })} />
        ))}
        {!forecastsStore.forecasts?.length && 'Nenhum dado salvo encontrado'}
      </ForecastsContainer>
      <ForecastsActions>
        <Button onClick={() => navigate('/add-forecasts')}>
          Adicionar local
        </Button>
      </ForecastsActions>
    </>
  )
})

export default Forecasts;
