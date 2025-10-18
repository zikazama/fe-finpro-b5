import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/sidebar";

const Home = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout(); // Clear user data from context and localStorage
        navigate("/login"); // Redirect to login page

        Swal.fire({
          title: "Logged out!",
          text: "You have been successfully logged out.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="flex flex-row h-screen w-screen bg-[#C4C4C4]">
      <Sidebar />
      <div className="max-w-4xl mx-auto p-6 ">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Homepage</h1>
        <p className="mb-6">You are successfully logged in!</p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
