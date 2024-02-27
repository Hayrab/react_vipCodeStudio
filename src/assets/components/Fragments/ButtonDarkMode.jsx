import "./DarkMode.css";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const ButtonDarkMode = (props) => {
  return (
    <>
      <div id="darkmode">
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label">
          <BsMoonStarsFill color="white" />
          <BsFillSunFill color="yellow" />
          <div className="ball"></div>
        </label>
      </div>
    </>
  );
};

export default ButtonDarkMode;
