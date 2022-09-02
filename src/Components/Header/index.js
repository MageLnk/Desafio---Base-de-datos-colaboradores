import GeneralContext from "../../Context/GeneralContext";
// Context
import { useContext } from "react";
// Components

const Header = () => {
  const { logIn, handleLogin, handleLogOut, ejercicio } = useContext(GeneralContext);
  return (
    <div className="header-general-container">
      <h3>Buscador de colaboradores</h3>
      <button onClick={ejercicio}>Ejercicios</button>
      <input className="header-input" placeholder="Busca un colaborador" />
    </div>
  );
};

export default Header;
