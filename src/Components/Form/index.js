const Input = ({ handleUser, setHandleUser, handleEmail, setHandleEmail }) => {
  return (
    <form className="form-general-container" typeof="submit" onSubmit={(e) => e.preventDefault()}>
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
