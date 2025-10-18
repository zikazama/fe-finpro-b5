import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { register as authServiceRegister } from "../services/authService";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const userData = await authServiceRegister(username, email, password, confirmPassword);
      console.log("Registration successful:", userData);
      navigate("/login");
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
      <div className="bg-white w-[500px] h-[640px] rounded-[20px] flex flex-col justify-center text-center gap-[20px]">
        <img
          src="/assets/images/logo.png"
          alt="Logo"
          className="w-[130px] m-auto my-0"
        />
        <h1 className="font-medium text-[26px] ">Welcome Back!</h1>
        <span className="text-[14px] text-[#919191]">
          Create your account here!
        </span>

        <form
          onSubmit={handleRegister}
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
            <label htmlFor="email" className="text-left w-[300px]">
              Email
            </label>
            <input
              id="email"
              className="w-[300px] h-[40px] p-[5px] border-[1px] border-[#EBEBEB] rounded-[10px] "
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="flex flex-col justify-center items-center gap-[5px]">
            <label htmlFor="confirm-password" className="text-left w-[300px]">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              className="w-[300px] h-[40px] p-[5px] border-[1px] border-[#EBEBEB] rounded-[10px] "
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-[300px] h-[40px] bg-[#3572EF] rounded-[10px] text-white"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="text-[#919191] text-[14px]">
          Already have an account?
          <Link className="text-[#3572EF] ml-[10px]" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
