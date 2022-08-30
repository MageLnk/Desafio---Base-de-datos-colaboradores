import GeneralContext from "../../Context/GeneralContext";
// Context
import { useContext } from "react";
// Components
import Button from "../Button";

const Header = () => {
  const { logIn, handleLogin, handleLogOut } = useContext(GeneralContext);
  return (
    <div className="header-general-container">
      <span>Logo</span>
      {!logIn ? (
        <Button status={"Log-in"} handleLogin={handleLogin} logInStatus={true} />
      ) : (
        <Button status={"Log-out"} handleLogin={handleLogOut} logInStatus={false} />
      )}
    </div>
  );
};

export default Header;
