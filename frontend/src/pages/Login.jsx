import LoginImage from "../assets/loginImage.jpg";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div
      id="login-page"
      className="w-full h-screen flex items-center justify-center bg-gray-100"
    >
      <LoginForm />
      <div className="w-1/2 h-screen bg-gray-50">
        <img
          src={LoginImage}
          alt="Login"
          className="object-cover h-screen w-full"
        />
      </div>
    </div>
  );
};

export default Login;
