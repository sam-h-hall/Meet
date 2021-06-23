import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState([]);

  return (
    <div className="flex border-2 h-screen max-h-screen items-center justify-center">
      <form className="flex flex-col justify-around  border-2 border-red-200 items-center h-32 w-80">
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
