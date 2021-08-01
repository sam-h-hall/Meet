import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { gql } from "@apollo/client";
import { client } from "../index";

const Register = () => {
  const inputStyle = "border-2 border-gray-200 w-60 rounded-md pl-1";
  const errorStyle = "text-red-500 text-sm";

  const history = useHistory();

  const validationSchema = yup.object().shape({
    username: yup.string().required("*username required"),
    email: yup.string().email().required("*email required"),
    password: yup.string().required("*password required"),
    pwdRepeat: yup
      .string()
      .required("*passwords do not match")
      .oneOf([yup.ref("password"), null], "*passwords do not match"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
    pwdRepeat: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
    defaultValues: { ...initialValues },
  });

  const REGISTER = gql`
    mutation RegisterMutation(
      $registerUsername: String!
      $registerEmail: String!
      $registerPassword: String!
      $registerPasswordRpt: String!
    ) {
      register(
        username: $registerUsername
        email: $registerEmail
        password: $registerPassword
        passwordRpt: $registerPasswordRpt
      ) {
        user {
          _id
          username
          email
        }
        token
      }
    }
  `;

  const Submit = (credentials: {
    username: string;
    email: string;
    password: string;
    pwdRepeat: string;
  }) => {
    client
      .mutate({
        variables: {
          registerUsername: credentials.username,
          registerEmail: credentials.email,
          registerPassword: credentials.password,
          registerPasswordRpt: credentials.pwdRepeat,
        },
        mutation: REGISTER,
      })
      .then((res) => {
        localStorage.setItem("authToken", res.data.register.token);
        history.push("/");
      })
      .catch((err) => console.log({ ...err }));
  };

  return (
    <div className="flex flex-col h-screen max-h-screen items-center justify-center">
      <h1 className="text-white font-lobster text-4xl border-purple-700 bg-purple-700 border-2 w-80 text-center rounded-t-md">
        Meet
      </h1>
      <form
        className="h-auto flex flex-col justify-between border-l-2 border-r-2 border-b-2 items-center w-80 rounded-b-md pt-3"
        onSubmit={handleSubmit(Submit)}
      >
        <div className="mb-4">
          <input
            className={inputStyle}
            contentEditable="true"
            placeholder="username"
            {...register("username", {
              required: "username is required",
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
              required: "email is required",
            })}
          />
          {errors.email && <p className={errorStyle}>{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <input
            className={inputStyle}
            type="password"
            contentEditable="true"
            placeholder="password"
            {...register("password", {
              required: "password is required",
            })}
          />
          {errors.password && (
            <p className={errorStyle}>{errors.password.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            className={inputStyle}
            type="password"
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
      <div>
        <p>
          Already a member?{" "}
          <Link className="underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
