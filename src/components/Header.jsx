import { useState } from "react";
import Logo from "../asset/images/download.png";
import { Link } from "react-router-dom";
import useIsonline from "../utils/useIsonline";
import menuimg from "../asset/images/menuimg.png";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img className="w-[80%] sm:w-48" src={Logo} alt="logo" />
  </a>
);

const Header = () => {
  const cartItems = useSelector((store) => store.cart.item);
  console.log(cartItems);
  const online = useIsonline();
  const [login, setLogin] = useState(true);
  return (
    <div className=" border-solid border-2 border-black-100 shadow-lg m-3 flex justify-center sm:justify-between rounded-md">
      <Title />
      <div className=" md:hidden flex justify-end w-[20%] items-center m-2 ">
        <img className="h-8 cursor-pointer" src={menuimg} />
      </div>
      <div className="navItems w-[60%] hidden md:block">
        <ul className="flex justify-between items-center h-12 m-1">
          <li>{online ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>

          <li>
            <Link to="/instamart">INSTAMART</Link>
          </li>
          <li>
            <Link to="/cart">
              CART-<span className="bg-red-200 p-1">{cartItems.length}</span>
            </Link>
          </li>
          {!login ? (
            <button onClick={() => setLogin(true)}>LOGIN</button>
          ) : (
            <button onClick={() => setLogin(false)}>LOGOUT</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
