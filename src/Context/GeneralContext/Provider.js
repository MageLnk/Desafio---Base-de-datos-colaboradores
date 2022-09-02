import { useState } from "react";
// Context
import GeneralContext from "./";

const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4,
  },
  {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 3,
  },
  {
    id: 3,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 1,
  },
];

const GeneralContextProvider = ({ children }) => {
  const [logIn, setLogIn] = useState(false);

  const handleLogin = (handler) => {
    setLogIn(handler);
  };
  const handleLogOut = (handler) => {
    setLogIn(handler);
  };
  const ejercicio = () => {
    console.log(passengers.map((info) => info.passengerName));
  };

  return (
    <GeneralContext.Provider value={{ logIn, setLogIn, handleLogin, handleLogOut, ejercicio }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
