import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as yup from "yup";

const Register = () => {
  const [loggedIn, setLoggedIn] = useState([]);
  const inputStyle = "border-2 border-gray-200 w-60 rounded-md pl-1";
  const errorStyle = "text-red-500 text-sm";

  const validationSchema = yup.object().shape({
    username: yup.string().required("*username required"),
    email: yup.string().email().required("*email required"),
    password: yup.string().required("*password required"),
    pwdRepeat: yup
      .string()
      .required("*passwords do not match")
      .oneOf([yup.ref("password"), null], "*passwords do not match"),
  });
  //schema.validate({}).catch((err) => {
  //console.log(err.message);
  //console.log(err.errors);
  //});

  const initialValues = {
    username: "",
    email: "",
    password: "",
    pwdRepeat: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
    defaultValues: { initialValues },
  });

  useEffect(() => {
    Axios.get("http://localhost:8000")
      .then((res) => {
        console.log(res.data);
        reset({
          initialValues,
        });
      })
      .catch((err) => console.log("get req: ", err));
  }, []);

  const submit = (credentials) => {
    console.log(credentials);
    if (credentials) {
      // add some spinning wheel or something while isSubmitting is true, reset and
      // redirect if successful --> don't want to reset if it is not successful
      Axios.post("http://localhost:8000/register", credentials)
        .then((res) => console.log("res ", res.data))
        .catch((err) =>
          console.log(
            "Post err: ",
            err.response.status,
            " ",
            err.response.data.error
          )
        );
    } else {
      console.log("Fields missing");
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
          {errors.username && (
            <p className={errorStyle}>{errors.username.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            className={inputStyle}
            contentEditable="true"
            placeholder="email"
            {...register("email", {
              required: "email required",
            })}
          />
          {errors.email && <p className={errorStyle}>{errors.email.message}</p>}
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
          {errors.password && (
            <p className={errorStyle}>{errors.password.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            className={inputStyle}
            contentEditable="true"
            placeholder="repeat password"
            {...register("pwdRepeat", {
              required: "passwords must match",
            })}
          />
          {errors.pwdRepeat && (
            <p className={errorStyle}>{errors.pwdRepeat.message}</p>
          )}
        </div>

        <button className="bg-blue-400 w-60 rounded-md mb-1" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
