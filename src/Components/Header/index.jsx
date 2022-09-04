const Header = ({ handlerSearcher, setHandlerSearcher, filterSearcher }) => {
  return (
    <div className="header-general-container">
      <h3>Buscador de colaboradores</h3>
      <form
        className="header-form"
        typeof="submit"
        onSubmit={(e) => {
          e.preventDefault();
          setHandlerSearcher("");
        }}
      >
        <input
          className="header-input"
          placeholder="Busca un colaborador"
          value={handlerSearcher}
          onChange={(e) => {
            setHandlerSearcher(e.target.value);
            filterSearcher();
          }}
        />
      </form>
    </div>
  );
};

export default Header;
