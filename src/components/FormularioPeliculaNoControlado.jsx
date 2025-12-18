import { useRef } from 'react';

function FormularioPeliculaNoControlado() {
  const nombreRef = useRef(null);
  const directorRef = useRef(null);
  const clasificacionRef = useRef(null);
  const recaudacionRef = useRef(null);
  const notaRef = useRef(null);
  const carteleraRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (nombre.length < 5) {
      alert("El nombre debe tener al menos 5 caracteres");
      return;
    }

    if (director.length < 5) {
      alert("El director debe tener al menos 5 caracteres");
      return;
    }

    if (!clasificacion) {
      alert("La clasificación es obligatoria");
      return;
    }

    if (isNaN(nota) || nota < 1 || nota > 10) {
      alert("La nota debe ser un número entre 1 y 10");
      return;
    }

    if (!cartelera.startsWith("http")) {
      alert("La URL de la cartelera debe empezar por http");
      return;
    }

    const datos = {
      nombre: nombreRef.current.value,
      director: directorRef.current.value,
      clasificacion: clasificacionRef.current.value,
      recaudacion: recaudacionRef.current.value,
      nota: notaRef.current.value,
      cartelera: carteleraRef.current.value,
    };

    console.log("Datos enviados:", datos);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
      >
        <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
          Formulario No Controlado&quot;Películas&quot;
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
            ref={nombreRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="director"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Director:
          </label>
          <input
            id="director"
            type="text"
            ref={directorRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="clasificacion"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Clasificación:
          </label>
          <input
            id="clasificacion"
            type="text"
            ref={clasificacionRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="recaudacion"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Recaudación:
          </label>
          <input
            id="recaudacion"
            type="text"
            ref={recaudacionRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="nota"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nota:
          </label>
          <input
            id="nota"
            type="number"
            ref={notaRef}
            defaultValue={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="cartelera"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Cartelera:
          </label>
          <input
            id="cartelera"
            type="url"
            ref={carteleraRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

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
export default FormularioPeliculaNoControlado;