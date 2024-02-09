import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { ForecastsActions, ForecastsContainer } from "./styles";

const Forecasts = () => {
  const navigate = useNavigate();

  return (
    <>
      <ForecastsContainer className="empty">
        Nenhum dado salvo até o momento
      </ForecastsContainer>
      <ForecastsActions>
        <Button onClick={() => navigate('/add-forecasts')}>
          Adicionar local
        </Button>
      </ForecastsActions>
    </>
  )
}

export default Forecasts;
