import { useState } from "react";

const Tareas = () => {
  const [tareas, setTareas] = useState(["tarea 1", "tarea 2"]);
  const [inputTarea, setInputTarea] = useState("");

  const manejarFormulario = (e) => {
    e.preventDefault();
    setTareas([...tareas, inputTarea]);
    setInputTarea("");
  };

  const eliminarTarea = () => {};

  const modificarTarea = () => {};

  return (
    <>
      <h1>Tareas</h1>

      <form onSubmit={manejarFormulario}>
        <input type="text" value={inputTarea} onChange={(e) => setInputTarea(e.target.value)} />
        <button>Agregar tarea</button>
      </form>

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea}>{tarea}</li>
        ))}
      </ul>
    </>
  );
};

export default Tareas;
