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
  const [dataCollaboratorsFiltered, setDataCollaboratorsFiltered] = useState([]);

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

  const filterSearcher = () => {
    const filterData = dataCollaborators.filter((data) => {
      let finalData = "";
      if (data.nombre.includes(handlerSearcher) || data.correo.includes(handlerSearcher)) {
        finalData = data;
      }
      return finalData;
    });
    setDataCollaboratorsFiltered(filterData);
  };
  return (
    <div className="app-genereal-container">
      <Header
        handlerSearcher={handlerSearcher}
        setHandlerSearcher={setHandlerSearcher}
        filterSearcher={filterSearcher}
      />
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
          <ListOfCollaborators collaboratorsList={dataCollaboratorsFiltered} />
        )}
      </div>
    </div>
  );
};

export default App;
