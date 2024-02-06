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
    <div className="flex flex-col items-center gap-2 p-3 pb-6">
      <h2 className="text-center">
        Your Body Mass Index (BMI) is
        <span className="font-bold text-3xl text-accent"> {BMI}</span>
      </h2>
      <h2>
        you are <span className="font-bold">{getCategory()}</span>
      </h2>
    </div>
  );
}

export default Result;
