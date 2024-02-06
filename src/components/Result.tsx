import type { ResultProps } from "../types/types";
function Result({ BMI }: ResultProps) {
  function getCategory() {
    if (BMI < 18.5) {
      return "underweight";
    } else if (BMI < 24.9) {
      return "Healthy Weight";
    } else if (BMI < 29.9) {
      return "overweight";
    }
    return "obese";
  }
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <h2>
        Your Body Mass Index (BMI) is
        <span className="font-bold text-3xl"> {BMI}</span>
      </h2>
      <h2>you are {getCategory()}</h2>
    </div>
  );
}

export default Result;
