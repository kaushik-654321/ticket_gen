import Form from "./ticket";
import "./styles.css";
import "./form.css";
import Heading from "./heading";
import { FormProvider } from "./formContext";
import { useForm } from "./formContext";

export default function App() {
  return (
    <FormProvider>
      <div className="App demo">
        <img
          src="../assets/images/logo-full.svg"
          alt="logo"
          className="logo"
        ></img>
        <div className="subtitle">
          <Heading />
        </div>

        <Form />
      </div>
    </FormProvider>
  );
}
