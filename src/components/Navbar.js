import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <span className="font-bold text-lg">🎮 Game Review</span>
      <div className="flex space-x-4">
        <Link to="/">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg">
            Home
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
