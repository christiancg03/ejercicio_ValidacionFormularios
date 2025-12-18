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
    const datos = {
      nombre: nombreRef.current.value,
      email: emailRef.current.value,
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
          Formulario &quot;No Controlado&quot;
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
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email:
          </label>
          <input 
            id="email"
            type="email"
            ref={emailRef} 
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