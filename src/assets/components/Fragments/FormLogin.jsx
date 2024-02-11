import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useContext, useEffect, useRef, useState } from "react";
import { login } from "../../../services/auth.service";
import { DarkMode } from "../../../context/DarkMode";

const FormLogin = () => {
  const { isDarkMode } = useContext(DarkMode);
  const [loginFailed, setLoginFailed] = useState("");
  const textColour = !isDarkMode ? "text-black" : "text-white focus:text-black";

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value)
    // localStorage.setItem("password", event.target.password.value)
    // window.location.href = "/product"
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res); // ambil token dari res
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/products";
    } else {
      usernameRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        classname={textColour}
        label="Username"
        type="text"
        name="username"
        placeholder="User Name"
        ref={usernameRef}
      />
      <InputForm
        classname={textColour}
        label="Password"
        type="password"
        name="password"
        placeholder="*****"
      />

      <Button classname="bg-blue-600 w-full rounded-md" type="submit">
        {" "}
        Login{" "}
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
