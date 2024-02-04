import icon from "../assets/images/bmi-icon.png";
function Header() {
  return (
    <div className=" bg-accent text-slate-50 flex w-full border-2 border-green-500 justify-between">
      <div>
        <h1 className=" w-1/2">BMI Calculator</h1>
        <h2>use this calculator to check your body mass index(BMI)</h2>
      </div>
      <img className=" w-1/2" src={icon} />
    </div>
  );
}

export default Header;
