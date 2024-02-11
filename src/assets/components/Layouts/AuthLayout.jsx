import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../../context/DarkMode";
import Button from "../Elements/Button";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <Button
          classname="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </Button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p
          className={`font-medium text-slate-500 mb-8 ${
            !isDarkMode ? "text-black" : "text-white"
          }`}
        >
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  const { isDarkMode } = useContext(DarkMode);
  if (type === "login") {
    return (
      <p
        className={`text-sm mt-2 text-center ${
          !isDarkMode ? "text-black" : "text-white"
        }`}
      >
        Don't have an account?{" "}
        <Link to={`/register`} className="font-bold text-blue-600">
          Sign Up!
        </Link>
      </p>
    );
  } else {
    return (
      <p
        className={`text-sm mt-2 text-center ${
          !isDarkMode ? "text-black" : "text-white"
        }`}
      >
        Already have an account?{" "}
        <Link to={`/login`} className="font-bold text-blue-600">
          Sign In!
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
