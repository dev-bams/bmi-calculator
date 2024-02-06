import { useState } from "react";
import FormHeader from "../components/FormHeader";
import FormBody from "./FormBody";


function Form() {
  const [measurements, setMeasurements] = useState({ height: 0, weight: 0 });
  function assignMeasurements(name: string, measurement: number) {
    setMeasurements((prevMeasurements) => ({
      ...prevMeasurements,
      [name]: measurement,
    }));
  }
  function handleSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submitted");
  }
  console.log(measurements);
  return (
    <div className="flex flex-col max-w-3xl self-center w-full p-6 rounded-t-md">
      <form
        className="bg-primary rounded-t-md"
        onSubmit={(e) => {
          handleSubmission(e);
        }}
      >
        <FormHeader />
        <FormBody assignMeasurements={assignMeasurements} />
      </form>
    </div>
  );
}

export default Form;
