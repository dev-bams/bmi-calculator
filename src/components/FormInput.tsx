import { useState } from "react";
import type { FormInputProps } from "../types/types";

function FormInput({
  type,
  name,
  inputIcon: InputIcon,
  assignMeasurements,
}: FormInputProps) {
  const [value, setValue] = useState("");
  return (
    <div className=" flex bg-white min-h-[56px] outline-2 outline outline-slate-300 rounded-sm">
      <input
        className=" flex-grow outline-none pl-4"
        type={type}
        name={name}
        value={value}
        onChange={(e) => {
          const newValue = e.target.value;
          setValue(newValue);
          assignMeasurements(name, Number(newValue));
        }}
      />
      <InputIcon />
    </div>
  );
}

export default FormInput;
