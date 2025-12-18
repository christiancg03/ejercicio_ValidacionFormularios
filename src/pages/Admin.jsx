/**
 * Admin component renders the administration panel interface.
 *
 * @component
 * @returns {JSX.Element} The rendered admin panel with a heading and description.
 */

import { useState } from "react";
import FormularioPeliculaControlado from "./FormularioPeliculaControlado";
import FormularioPeliculaNoControlado from "./FormularioPeliculaNoControlado";
import FormularioInterprete from "./FormularioInterprete";

function Admin() {
  const [formVisible, setFormVisible] = useState("");
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Panel de Administración</h2>
      
      {/* Botones de los Formularios */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <button
          onClick={() => setFormVisible("controlado")}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Añadir Película (Controlado)
        </button>

        <button
          onClick={() => setFormVisible("noControlado")}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Añadir Película (No Controlado)
        </button>

        <button
          onClick={() => setFormVisible("interprete")}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Añadir Intérprete
        </button>
      </div>

      {/* Para mostrar los formularios */}
      {formVisible === "controlado" && <FormularioPeliculaControlado />}
      {formVisible === "noControlado" && <FormularioPeliculaNoControlado />}
      {formVisible === "interprete" && <FormularioInterprete />}

    </>
  );
}
export default Admin;