import LabeledInput from "./LabeledInput";
import CM from "../assets/icons/CM";
import KG from "../assets/icons/KG";
import CalculateButton from "./CalculateButton";
function FormBody() {
  return (
    <div className="flex p-6 gap-8 flex-col ">
      <LabeledInput type="number" name="Height" inputIcon={CM} label="Height" />
      <LabeledInput type="number" name="Height" inputIcon={KG} label="Weight" />
      <CalculateButton />
    </div>
  );
}

export default FormBody;
