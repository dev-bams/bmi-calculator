import FormHeader from "../components/FormHeader";
import FormBody from "./FormBody";

function Form() {
  return (
    <div className="flex flex-col max-w-3xl self-center w-full pl-6 pr-6">
      <form className="bg-primary">
        <FormHeader />
        <FormBody />
      </form>
    </div>
  );
}

export default Form;
