import icon from "../assets/images/bmi-icon.png";
function FormHeader() {
  return (
    <div className=" bg-accent text-slate-50 flex w-full justify-between p-4">
      <div className="flex flex-col justify-center gap-1">
        <h1 className=" font-bold text-3xl">BMI Calculator</h1>
        <h2 className="">
          use this calculator to check your body mass index(BMI)
        </h2>
      </div>
      <div className="">
        <img className=" w-20" src={icon} />
      </div>
    </div>
  );
}

export default FormHeader;
