import { Link } from "react-router";

export const Login = () => {
  return (
    <div className="bg-[url(/assets/images/bg-login.png)] bg-cover h-[100vh] w-[100vw] pt-[5%] pl-[8%]">
      <div className="bg-white w-[500px] h-[540px] rounded-[20px] flex flex-col justify-center text-center gap-[20px]">
        <img
          src="/assets/images/logo.png"
          alt="Logo"
          className="w-[130px] m-auto my-0"
        />
        <h1 className="font-medium text-[26px] ">Welcome Back!</h1>
        <span className="text-[14px] text-[#919191]">
          Please enter your username and password here!
        </span>

        <form
          action=""
          className="flex flex-col justify-center items-center gap-[10px]"
        >
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <div htmlFor="" className="text-left w-[300px]">
              Username
            </div>
            <input
              className="w-[300px] h-[40px] p-[5px] border-[1px] border-[#EBEBEB] rounded-[10px] "
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <div htmlFor="" className="text-left w-[300px]">
              Password
            </div>
            <input
              className="w-[300px] h-[40px] p-[5px] border-[1px] border-[#EBEBEB] rounded-[10px] "
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-[300px] h-[40px] bg-[#3572EF] rounded-[10px] text-white"
          >
            Login
          </button>
        </form>
        <div className="text-[#919191] text-[14px]">
          Don’t have an account?
          <Link className="text-[#3572EF] ml-[10px]" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
