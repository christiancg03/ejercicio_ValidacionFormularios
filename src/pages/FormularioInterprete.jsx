import { useState } from 'react';

function FormularioPeliculaControlado(){

  const [pelicula, setPelicula] = useState("");
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [biografia, setBiografia] = useState("");
  const [imagen, setImagen] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (nombre.length < 5) {
      setError("El nombre debe contener al menos 5 caracteres.");
      return;
    }
    if (grupo.length < 5) {
      setError("El nombre del grupo debe contener al menos 5 caracteres.");
      return;
    }
    if (anyoPublicacion.length !== 4 || isNaN(anyoPublicacion)) {
      setError("El año debe tener 4 caracteres numéricos.");
      return;
    }
    if (!tipoMusica) {
      setError("Debes seleccionar un tipo de música.");
      return;
    }
    setError("");

    const formData = {
      nombre,
      grupo,
      anyoPublicacion,
      tipoMusica,
      localizacion,
      prestado,
    };

    console.log("Datos enviados:", formData);
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
      >
        <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
          Formulario &quot;Discos&quot;
        </div>

        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            aria-invalid={!!error}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="grupo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Grupo:
          </label>
          <input
            id="grupo"
            type="text"
            value={grupo}
            onChange={(e) => setGrupo(e.target.value)}
            aria-invalid={!!error}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="anyoPublicacion"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Año de Publicación:
          </label>
          <input
            id="anyoPublicacion"
            type="text"
            value={anyoPublicacion}
            onChange={(e) => setAnyoPublicacion(e.target.value)}
            aria-invalid={!!error}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="tipoMusica"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tipo de Música:
          </label>
          <select
            id="tipoMusica"
            value={tipoMusica}
            onChange={(e) => setTipoMusica(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            <option value="">--Selecciona un tipo--</option>
            <option value="rock">Rock</option>
            <option value="progressive">Progressive</option>
            <option value="punk">Punk</option>
            <option value="trash">Trash</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="localizacion"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Localización:
          </label>
          <input
            id="localizacion"
            type="text"
            value={localizacion}
            onChange={(e) => setLocalizacion(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="prestado"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Prestado:
          </label>
          <input
            id="prestado"
            type="checkbox"
            value={prestado}
            onChange={(e) => setPrestado(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        {error && (
          <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mb-4">
            {error}
          </p>
        )}

        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );

}

export default FormularioPeliculaControlado;