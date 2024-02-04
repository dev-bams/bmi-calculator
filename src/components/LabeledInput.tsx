import { LabeledInputProps } from "../types/types";
import FormInput from "./FormInput";

function LabeledInput({  type, name, inputIcon, label }: LabeledInputProps) {
  return (
    <div className=" flex flex-col gap-2">
      <label>{label}</label>
      <FormInput type={type} name= {name} inputIcon={inputIcon} />
    </div>
  );
}

export default LabeledInput;
