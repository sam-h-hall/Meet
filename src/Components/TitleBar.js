import { Link } from "react-router-dom";

const TitleBar = () => {
  return (
    <div className="flex flex-row justify-between fixed border-2 border-purple-700 w-full bg-purple-700">
      <p className="invisible">Login</p>
      <h1 className="text-white font-lobster self-center justify-self-center text-center text-2xl">
        Meet
      </h1>
      <nav className="border-2 border-red-600">
        <Link className="" to="/login">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default TitleBar;
