import { Form } from "react-router-dom";

export function CityForm() {
  return <Form role={"search"}>
    <label htmlFor={"city"}>City :</label>
    <input type={"search"} id={"city"} name={"city"} />
    <button type={"submit"}>Submit</button>
  </Form>;
}
