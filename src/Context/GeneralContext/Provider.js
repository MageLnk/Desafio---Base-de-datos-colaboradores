import { useState } from "react";
// Context
import GeneralContext from "./";

const GeneralContextProvider = ({ children }) => {
  const [logIn, setLogIn] = useState(false);

  const handleLogin = (handler) => {
    setLogIn(handler);
  };
  const handleLogOut = (handler) => {
    setLogIn(handler);
  };

  return (
    <GeneralContext.Provider value={{ logIn, setLogIn, handleLogin, handleLogOut }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
