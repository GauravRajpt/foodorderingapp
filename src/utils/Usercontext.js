import { createContext, useContext } from "react";

const userContext = createContext({
  user: {
    name: "gaurav",
    email: "gaurav@gmail.com",
  },
});

export default userContext;
