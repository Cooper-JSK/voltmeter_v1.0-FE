import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 p-4">
    <div className="container mx-auto flex justify-between">
      <Link to="/" className="text-white text-lg font-bold">
        Voltmeter App
      </Link>
      <div>
        <Link to="/sessions" className="text-white mx-2 font-bold text-lg font-poppins">
          Sessions
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
