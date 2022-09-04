import NotResults from "./NotResults";

const ListOfCollaborators = ({ collaboratorsList }) => {
  const collaboratorsListResult = collaboratorsList.map((e) => {
    return (
      <div className="list-of-collaborators-container" key={e.id}>
        <div>
          <span>
            {e.nombre} - {e.correo}
          </span>
        </div>
      </div>
    );
  });
  return <>{collaboratorsList.lenght === 0 ? <NotResults /> : collaboratorsListResult}</>;
};

export default ListOfCollaborators;
