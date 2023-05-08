import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/Usercontext";
const Footer = () => {
  const user = useContext(userContext);
  return (
    <div className="m-3">
      <ul>
        <Link to="/about" className="inline">
          <li>About us</li>
        </Link>
        <Link to="/contact" className="inline">
          <li>Contact</li>
        </Link>
        <Link to="contact" className="inline">
          {" "}
          <li>Help & Support</li>
        </Link>
        <Link to="/about" className="inline">
          {" "}
          <li>Team</li>
        </Link>
      </ul>
      <div className="font-bold bg-slate-50">
        this website is made by {user.name}
      </div>
    </div>
  );
};
export default Footer;
