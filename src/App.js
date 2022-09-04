import { useState } from "react";
// Components
import Form from "./Components/Form";
import Header from "./Components/Header";
import ListOfCollaborators from "./Components/ListOfCollaborators";

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
  const [handleUser, setHandleUser] = useState("");
  const [handleEmail, setHandleEmail] = useState("");

  const handleSubmit = () => {
    console.log("Aer");
  };

  return (
    <div className="app-genereal-container">
      <Header />
      <div className="content-general-container">
        <Form
          handleUser={handleUser}
          setHandleUser={setHandleUser}
          handleEmail={handleEmail}
          setHandleEmail={setHandleEmail}
          handleSubmit={handleSubmit}
        />
        <h2 className="content-general-sub-title">Lista de colaboradores</h2>
        <ListOfCollaborators collaboratorsList={BaseColaboradores} />
      </div>
    </div>
  );
};

export default App;
