const Button = ({ status, handleLogin, logInStatus }) => {
  return (
    <button className="header-button" onClick={() => handleLogin(logInStatus)}>
      {status}
    </button>
  );
};

export default Button;
