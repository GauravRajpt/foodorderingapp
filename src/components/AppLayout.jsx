import Footer from "./Footer";
import Body from "./Body";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/Usercontext";
import { Provider } from "react-redux";
import store from "../utils/store";

const AppLayout = () => {
  const { user } = useContext(userContext);
  return (
    <div className="applayout">
      <Provider store={store}>
        <userContext.Provider value={{ name: "Gaurav" }}>
          <Header />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </Provider>
    </div>
  );
};
export default AppLayout;
