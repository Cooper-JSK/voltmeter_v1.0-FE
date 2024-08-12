import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";

const Navbar = () => (
  <nav className="bg-blue-600 p-4 mx-auto">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/sessions" className="text-white text-xl font-montserrat font-bold">
        Voltmeter App
      </Link>

      <div className="flex items-center">
        <Link
          to="/sessions"
          className="text-white mx-2 font-bold text-lg font-poppins"
        >
          Sessions
        </Link>
        <Link
          to="/create-session"
          className="text-white mx-2 font-bold text-lg font-poppins flex items-center"
        >
          <FaCirclePlus size={25} />
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
