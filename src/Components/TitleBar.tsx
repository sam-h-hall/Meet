import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const TitleBar = () => {
  const history = useHistory();

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("authToken");
    history.push("/login");
  };
  return (
    <div className="flex flex-row justify-between fixed border-2 border-purple-700 w-full bg-purple-700 items-center">
      <button className="invisible pl-2">Logout</button>
      <Link to="/">
        <h1 className="text-white font-lobster self-center justify-self-center text-center text-2xl">
          Meet
        </h1>
      </Link>
      <nav className="pr-2">
        <button
          className="text-white font-josefinSans"
          onClick={() => logout()}
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default TitleBar;
