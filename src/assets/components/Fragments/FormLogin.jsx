import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
import { useEffect, useRef, useState } from "react";
import { login } from "../../../services/auth.service";


const FormLogin = () => {

  const [loginFailed, setLoginFailed] = useState("")



  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value)
    // localStorage.setItem("password", event.target.password.value)
    // window.location.href = "/product"
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    login(data, (status, res) => {
      if(status){
        localStorage.setItem('token', res) // ambil token dari res
        window.location.href = "/product"
      } else {
        setLoginFailed(res.response.data)
      }

    })
  }

  const usernameRef = useRef();

  useEffect(() =>{
    const token = localStorage.getItem("token");
    if(token){
        window.location.href = "/product";
    } else {
      usernameRef.current.focus();
    }
  },[])

  return ( 
    
    <form onSubmit={handleLogin}>
        <InputForm label="Username" type="text" name="username" placeholder="User Name" ref={usernameRef}/>
        <InputForm label="Password" type="password" name="password" placeholder="*****"/>

        <Button classname="bg-blue-600 w-full" type="submit"> Login </Button>
        {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
    </form>
  )
}

export default FormLogin