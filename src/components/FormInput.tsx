import type { FormInputProps } from "../types/types";

function FormInput({ type, name, inputIcon: InputIcon }: FormInputProps) {
  return (
    <div className=" flex bg-white min-h-[56px] outline-2 outline outline-slate-300 rounded-sm">
      <input className=" flex-grow outline-none pl-4" type={type} name={name} />
      <InputIcon />
    </div>
  );
}

export default FormInput;
