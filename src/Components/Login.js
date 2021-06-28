import { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState([]);
  const inputStyle = "border-2 border-gray-200 w-60 rounded-md pl-1"

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = ({ credentials }) => {
    if (credentials) {
      Axios.post("localhost:8000/login", credentials);
      console.log(credentials);
    } else {
      return;
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen items-center justify-center">
      <h1 className="font-lobster text-4xl border-purple-700 bg-purple-700 border-2 w-80 text-center rounded-t-md">
        Meet
      </h1>
      <form className="flex flex-col justify-between border-l-2 border-r-2 border-b-2 items-center h-44 w-80 rounded-b-md pt-3">
        <input
          id="username"
          className={inputStyle}
          placeholder="username"
        />
        <input
          id="email"
          className={inputStyle}
          placeholder="email"
        />
        <input
          id="password"
          className={inputStyle}
          placeholder="password"
        />
        <input
          id="pwdRepeat"
          className={inputStyle}
          placeholder="repeat password"
        />
        <button className="bg-blue-400 w-60 rounded-md mb-1">Login</button>
      </form>
    </div>
  );
};

export default Login;
