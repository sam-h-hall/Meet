import {Link} from "react-router-dom"

const TitleBar = () => {
  return (
    <div className="flex flex-row justify-between fixed border-2 border-purple-700 w-full bg-purple-700">
      <h1 className="text-white font-lobster">Meet</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default TitleBar;
