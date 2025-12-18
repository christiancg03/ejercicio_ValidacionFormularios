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
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Panel de Administración</h2>
      <p>Aquí irían las herramientas de administración.</p>
    </>
  );
}
export default Admin;