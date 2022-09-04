import { useState } from "react";
// Components
import { Form, Header, ListOfCollaborators } from "./Components";
// Dummy Data
import { BaseColaboradores } from "./dummyData";

const App = () => {
  const [handleUser, setHandleUser] = useState("");
  const [handleEmail, setHandleEmail] = useState("");
  const [handlerSearcher, setHandlerSearcher] = useState("");
  // Simulate get data some from api
  const [dataCollaborators, setDataCollaborators] = useState(BaseColaboradores);

  const handleSubmit = () => {
    setDataCollaborators([
      ...dataCollaborators,
      {
        id: (dataCollaborators.length + 1).toString(),
        nombre: handleUser,
        correo: handleEmail.toLowerCase(),
      },
    ]);
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
        {!handlerSearcher ? (
          <ListOfCollaborators collaboratorsList={dataCollaborators} />
        ) : (
          <span>Buscando</span>
        )}
      </div>
    </div>
  );
};

export default App;
