
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí podrías validar inputs, hacer fetch, etc.
    navigate("/home"); // Redirige a otra página
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <main className="h-auto w-[100%]">
      <div className="w-[100vw] h-auto relative flex justify-center items-center ">
        <header className="bg-blue-800 flex w-[95%] h-[80px] text-[1.5rem] items-center justify-center font-bold text-white rounded-[12px]">
          InLink
        </header>
      </div>
      <div className=" h-[500px] w-[100vw] flex relative justify-center">
        <form className="flex relative items-center justify-center w-[35%] ">
          <fieldset className=" login flex relative h-[380px] w-[100%] justify-center items-center gap-[20px] rounded-[12px] flex-col shadow-lg bg-white" >
            <div className="flex w-[90%] flex-col gap-[20px]">
              <label htmlFor="email" className="text-[1.1em] text-white">Email: <input id="email" type="email" name="email" className="relative w-[80%] h-[40px] p-[5px] left-[29px] rounded-[10px] border-[4px] login "></input></label>
              <label htmlFor="password" className="text-[1.1em] text-white ">Password: <input id="password" type="password" name="password" className="relative w-[80%] h-[40px] p-[5px] rounded-[10px] border-[4px] " ></input></label>
            </div>
            <button id="login" type="buttom" onClick={handleLogin} >Login</button>
            <button id="register" type="buttom" onClick={handleRegister}>Register</button>
            <hr className="w-[90%]" />
            <Link to="/recovery" className="underline text-blue-300 hover:text-white">
              Forgot your password?
            </Link>
          </fieldset>
        </form>
      </div>
      <footer className=" w-[100%] h-[100px] flex relative justify-center items-center " >
        <Link to="/terms" className="underline text-blue-300 hover:text-white">
          términos y condiciones
        </Link>
      </footer>
    </main>
  );
}