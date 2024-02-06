import LabeledInput from "./LabeledInput";
import CM from "../assets/icons/CM";
import KG from "../assets/icons/KG";
import CalculateButton from "./CalculateButton";
import type { FormBodyProps } from "../types/types";

function FormBody({ assignMeasurements }: FormBodyProps) {
  return (
    <div className="flex p-6 gap-8 flex-col ">
      <LabeledInput
        type="number"
        name="height"
        inputIcon={CM}
        label="Height"
        assignMeasurements={assignMeasurements}
      />
      <LabeledInput
        type="number"
        name="weight"
        inputIcon={KG}
        label="Weight"
        assignMeasurements={assignMeasurements}
      />
      <CalculateButton />
    </div>
  );
}

export default FormBody;
