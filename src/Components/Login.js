import { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState([]);
  const inputStyle = "border-2 border-gray-200 w-60 rounded-md pl-1";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (credentials) => {
    if (credentials) {
      Axios.post("http://localhost:8000/login", credentials)
        .then((res) => {
          console.log("log res \n", res);
        })
        .catch((err) => {
          console.log("login err \n", err);
        });
    } else {
      return;
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen items-center justify-center">
      <h1 className="text-white font-lobster text-4xl border-purple-700 bg-purple-700 border-2 w-80 text-center rounded-t-md">
        Meet
      </h1>
      <form
        className="h-auto flex flex-col justify-between border-l-2 border-r-2 border-b-2 items-center w-80 rounded-b-md pt-3"
        onSubmit={handleSubmit(submit)}
      >
        <div className="mb-4">
          <input
            className={inputStyle}
            contentEditable="true"
            placeholder="username"
            {...register("username", {
              required: "username required",
            })}
          />
        </div>

        <div className="mb-4">
          <input
            className={inputStyle}
            contentEditable="true"
            placeholder="password"
            {...register("password", {
              required: "username is required",
            })}
          />
        </div>

        <button className="bg-blue-400 w-60 rounded-md mb-1" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
