const Input = ({ placeHolderText = "" }) => {
  return (
    <form className="form-general-container" typeof="submit" onSubmit={console.log("ola k ase")}>
      <input placeholder="Ingresa el nombre del colaborador"></input>
      <input placeholder="Ingresa correo del colaborador"></input>
      <button>Agregar colaborador</button>
    </form>
  );
};

export default Input;
