import { Link } from "react-router-dom";

const TitleBar = () => {
  return (
    <div className="flex flex-row justify-between fixed border-2 border-purple-700 w-full bg-purple-700 items-center">
      <p className="invisible pl-2">Login</p>
      <Link to="/">
        <h1 className="text-white font-lobster self-center justify-self-center text-center text-2xl">
          Meet
        </h1>
      </Link>
      <nav className="pr-2">
        <Link className="font-josefinSans" to="/login">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default TitleBar;
