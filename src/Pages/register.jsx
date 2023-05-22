import AuthLayout from '../assets/components/Layouts/AuthLayout'
import FormRegister from '../assets/components/Fragments/FormRegister'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register" >
        <FormRegister />
    </AuthLayout>
  )
}

export default RegisterPage