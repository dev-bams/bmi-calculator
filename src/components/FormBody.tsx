import LabeledInput from "./LabeledInput";
import CM from "../assets/icons/CM";
import KG from "../assets/icons/KG";
function FormBody() {
  return (
    <div className="flex p-4 gap-6 flex-col ">
      <LabeledInput type="number" name="Height" inputIcon={CM} label="Height" />
      <LabeledInput type="number" name="Height" inputIcon={KG} label="Weight" />
    </div>
  );
}

export default FormBody;
