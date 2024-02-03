import icon from "../assets/images/bmi-icon.png";
function Header() {
  return (
    <div className=" bg-accent text-slate-50 flex w-full">
      <div>
        <h1>BMI Calculator</h1>
        <h2>use this calculator to check your body mass index(BMI)</h2>
      </div>
      <img src={icon} />
    </div>
  );
}

export default Header;
