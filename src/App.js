import { useState } from "react";
// Components
import { Form, Header, ListOfCollaborators } from "./Components";
// Dummy Data
import { BaseColaboradores } from "./dummyData";

const App = () => {
  const [handleUser, setHandleUser] = useState("");
  const [handleEmail, setHandleEmail] = useState("");
  const [dataCollaborators, setDataCollaborators] = useState(BaseColaboradores);

  const handleSubmit = () => {
    const newData = {
      id: (dataCollaborators.length + 1).toString(),
      nombre: handleUser,
      correo: handleEmail,
    };
    setDataCollaborators([...dataCollaborators, newData]);
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
        <ListOfCollaborators collaboratorsList={dataCollaborators} />
      </div>
    </div>
  );
};

export default App;
