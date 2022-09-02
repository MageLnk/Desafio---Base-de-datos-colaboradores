import { useState } from "react";
// Components
import Header from "./Components/Header";
import Form from "./Components/Form";
export const BaseColaboradores = [
  {
    id: "1",
    nombre: "Colaborador 1",
    correo: "colaborador1@colaborador1.com",
  },
  {
    id: "2",
    nombre: "Colaborador 2",
    correo: "colaborador2@colaborador2.com",
  },
  {
    id: "3",
    nombre: "Colaborador 3",
    correo: "colaborador3@colaborador3.com",
  },
];

const App = () => {
  const [handleUser, seHandleUser] = useState("");
  const [handleEmail, setHandleEmail] = useState("");
  return (
    <div className="app-genereal-container">
      <Header />
      <div className="content-general-container">
        <Form />
      </div>
    </div>
  );
};

export default App;
