import AuthLayout from "../assets/components/Layouts/AuthLayout";
import FormLogin from "../assets/components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
