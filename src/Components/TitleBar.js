import {Link} from "react-router-dom"

const TitleBar = () => {
  return (
    <div className="flex flex-row justify-between fixed border-2 border-red-500 w-full bg-red-500">
      <h1 className="text-white">Meet</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default TitleBar;
