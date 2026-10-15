import SignInView from "../../components/auth/loginForm";
import LoginScreenLogo from "../../assets/Login-Logo.png";
import MobileScreenLoginLogo from "../../assets/white-logo.svg";

function Login() {
  return (
    <div className="flex h-screen w-full bg-[#33bb78] md:bg-white justify-start">
      <div className="hidden md:flex md:w-[60%] h-screen bg-[#33bb78] justify-center items-center">
        <img
          src={LoginScreenLogo}
          alt="Logo"
          className="w-59 h-59"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full md:w-[40%] p-4 h-full ">
        <div className="md:hidden flex gap-4 justify-center items-center mb-6">
          <img
            src={MobileScreenLoginLogo}
            alt="Logo"
            className="w-17.25 h-17.25"
          />
          <h1 className="text-white text-4xl">Limitless</h1>
        </div>

        <div className="w-full rounded-lg p-6">
          <SignInView />
        </div>
      </div>
    </div>
  );
}

export default Login;
