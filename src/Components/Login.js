import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState([]);

  return (
    <div className="flex flex-col h-screen max-h-screen items-center justify-center">
      <h1 className="font-lobster text-4xl border-purple-700 bg-purple-700 border-2 w-80 text-center rounded-t-md">
        Meet
      </h1>
      <form className="flex flex-col justify-around border-l-2 border-r-2 border-b-2 items-center h-32 w-80 rounded-b-md pt-3">
        <input
          id="username"
          className="border-2 border-gray-200 w-60 rounded-md"
          placeholder="username"
        />
        <input
          id="password"
          className="border-2 border-gray-200 w-60 rounded-md"
          placeholder="password"
        />
        <button className="bg-blue-400 w-60 rounded-md">Login</button>
      </form>
    </div>
  );
};

export default Login;
