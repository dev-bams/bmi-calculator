import FormHeader from "../components/FormHeader";
import FormBody from "./FormBody";

function Form() {
  return (
    <div className="flex flex-col max-w-3xl self-center w-full p-6 rounded-t-md">
      <form className="bg-primary rounded-t-md">
        <FormHeader />
        <FormBody />
      </form>
    </div>
  );
}

export default Form;
