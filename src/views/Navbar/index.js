import "./index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Dashboard</Link>
    </div>
  );
};

export default Navbar;
