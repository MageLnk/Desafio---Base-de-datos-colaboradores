const Input = ({ handleUser, setHandleUser, handleEmail, setHandleEmail, handleSubmit }) => {
  const validEmail = (email) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
  };

  return (
    <form
      className="form-general-container"
      typeof="submit"
      onSubmit={(e) => {
        e.preventDefault();
        if (!handleUser || !handleEmail) {
          alert("No debe dejar espacios en blancos");
          return;
        }
        if (!validEmail(handleEmail)) {
          alert("Debe ingresar un correo válido");
          return;
        }
        handleSubmit();
        setHandleUser("");
        setHandleEmail("");
      }}
    >
      <input
        placeholder="Ingresa el nombre del colaborador"
        value={handleUser}
        onChange={(e) => setHandleUser(e.target.value)}
      ></input>
      <input
        placeholder="Ingresa correo del colaborador"
        value={handleEmail}
        onChange={(e) => setHandleEmail(e.target.value)}
      ></input>
      <button>Agregar colaborador</button>
    </form>
  );
};

export default Input;
