import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { login as authServiceLogin } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      console.log({ username, password });
      const userData = await authServiceLogin(username, password);
      console.log("Login successful:", userData);
      // Update auth context with user data
      login(userData);
      // Redirect to homepage after successful login
      navigate("/");
    } catch (err) {
      // Show error message using SweetAlert
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err.message,
        confirmButtonText: "Try Again",
      });
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

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
          onSubmit={handleLogin}
          className="flex flex-col justify-center items-center gap-[10px]"
        >
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <label htmlFor="username" className="text-left w-[300px]">
              Username
            </label>
            <input
              id="username"
              className="w-[300px] h-[40px] p-[5px] border-[1px] border-[#EBEBEB] rounded-[10px] "
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-[5px]">
            <label htmlFor="password" className="text-left w-[300px]">
              Password
            </label>
            <input
              id="password"
              className="w-[300px] h-[40px] p-[5px] border-[1px] border-[#EBEBEB] rounded-[10px] "
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="w-[300px] text-right">
            <Link to="/reset-password">
              <span className="text-[12px] text-[#ABABAB]">
                Forgot password?
              </span>
            </Link>
          </div>

          <button
            type="submit"
            className="w-[300px] h-[40px] bg-[#3572EF] rounded-[10px] text-white"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
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

export default Login;
