import InputForm from "../Elements/Input"
import Button from "../Elements/Button"


const FormRegister = () => {
  return (
    <form className="" action="">
        <InputForm label="FullName" type="text" name="fullname" placeholder="Insert your name here"/>
        <InputForm label="Email" type="email" name="email" placeholder="example@example.com"/>
        <InputForm label="Password" type="password" name="password" placeholder="*****"/>
        <InputForm label="Confirm Password" type="password" name="confirm password" placeholder="*****"/>

        <Button classname="bg-blue-600 w-full"> Register </Button>
    </form>
  )
}

export default FormRegister