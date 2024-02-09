import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ForecastsActions, Form } from "./styles";

const AddForecasts = () => (
  <>
    <Form>
      <Input type="number" />
      <Input type="number" />
      <ForecastsActions>
        <Button onClick={() => console.log('teste')}>
          Adicionar local
        </Button>
      </ForecastsActions>
    </Form>
  </>
)

export default AddForecasts;
