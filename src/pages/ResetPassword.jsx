import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { checkEmailExists, resetPassword } from "../services/authService";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (step === 1) {
        const emailExists = await checkEmailExists(email);
        if (emailExists.data.exists) {
          setStep(2);
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Email not found",
            confirmButtonText: "Try Again",
          });
        }
      } else {
        if (password !== confirmPassword) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Passwords do not match",
            confirmButtonText: "Try Again",
          });
          return;
        }
        await resetPassword(email, password);
        navigate("/login");
      }
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
        <h1 className="font-medium text-[26px] ">Reset Password</h1>

        {step === 1 ? (
          <span className="text-[14px] text-[#919191]">
            Please enter your registered email here!
          </span>
        ) : (
          <span className="text-[14px] text-[#919191]">
            Please enter your new password and confirm{" "}
          </span>
        )}

        <form
          onSubmit={handleResetPassword}
          className="flex flex-col justify-center items-center gap-[10px]"
        >
          {step === 1 ? (
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
          ) : (
            <>
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
                <label
                  htmlFor="confirm-password"
                  className="text-left w-[300px]"
                >
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
            </>
          )}

          <button
            type="submit"
            className="w-[300px] h-[40px] bg-[#3572EF] rounded-[10px] text-white"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : step === 1
              ? "Submit"
              : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
