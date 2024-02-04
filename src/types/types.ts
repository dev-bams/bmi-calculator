import React from "react";

type FormInputProps = {
  type: "number";
  name: string;
  inputIcon: React.FC;
};

type LabeledInputProps = FormInputProps & {
  label: string;
};

export type { FormInputProps, LabeledInputProps };
