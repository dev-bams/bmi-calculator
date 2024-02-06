import { useState } from "react";
import FormHeader from "../components/FormHeader";
import FormBody from "./FormBody";
import Result from "./Result";

function Form() {
  const [resultToggle, setResultToggle] = useState(false);
  const [BMI, setBMI] = useState(0);
  const [measurements, setMeasurements] = useState({ height: 0, weight: 0 });
  function assignMeasurements(name: string, measurement: number) {
    setMeasurements((prevMeasurements) => ({
      ...prevMeasurements,
      [name]: measurement,
    }));
  }
  function calculateBMI({
    height,
    weight,
  }: {
    height: number;
    weight: number;
  }) {
    height /= 100;
    const BMI = weight / (height * height);
    setBMI(BMI);
  }
  function handleSubmission(e: React.FormEvent<HTMLFormElement>) {
    if (!resultToggle) {
      setResultToggle(true);
    }
    e.preventDefault();
  }

  return (
    <div className="flex flex-col max-w-3xl self-center w-full p-6 rounded-t-md">
      <form
        className="bg-primary rounded-t-md"
        onSubmit={(e) => {
          handleSubmission(e);
          calculateBMI(measurements);
        }}
      >
        <FormHeader />
        <FormBody assignMeasurements={assignMeasurements} />
        {resultToggle && <Result BMI={BMI} />}
      </form>
    </div>
  );
}

export default Form;
