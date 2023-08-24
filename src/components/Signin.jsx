import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPasswordError("");
    setError("");
    setEmailError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      if (e.message === "Firebase: Error (auth/internal-error).") {
        setPasswordError("Please Enter Password!");
      } else if (e.message === "Firebase: Error (auth/invalid-email).") {
        setEmailError("Please Enter Valid Email!");
      } else if (e.message === "Firebase: Error (auth/user-not-found).") {
        setError("User Not Found!");
      }
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
        <p className="py-2">
          Don't have an account yet?{" "}
          <Link to="/signup" className="underline">
            Sign up.
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <p style={{ color: "red" }}>{error}</p>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3"
            type="email"
          />
          <p style={{ color: "red" }}>{emailerror}</p>
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3"
            type="password"
          />
          <p style={{ color: "red" }}>{passworderror}</p>
        </div>
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
