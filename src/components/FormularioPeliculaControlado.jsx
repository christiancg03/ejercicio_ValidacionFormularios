import { useState } from 'react';

function FormularioPeliculaControlado() {

    const [nombre, setNombre] = useState("");
    const [director, setDirector] = useState("");
    const [clasificacion, setClasificacion] = useState("");
    const [recaudacion, setRecaudacion] = useState("");
    const [nota, setNota] = useState("");
    const [cartelera, setCartelera] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (nombre.length < 5) {
            setError("El nombre debe contener al menos 5 caracteres.");
            return;
        }
        if (director.length < 5) {
            setError("El nombre del director debe contener al menos 5 caracteres.");
            return;
        }
        if (nota.length < 1 || nota.length > 10 || isNaN(nota)) {
            setError("La nota debe ser un número entre 1 y 10.");
            return;
        }
        if (!clasificacion) {
            setError("Debes añadir una clasificación.");
            return;
        }
        if (!cartelera.startsWith("http")) {
            setError("La URL de la cartelera debe empezar por http.");
            return;
        }
        setError("");

        const formData = {
            nombre,
            director,
            clasificacion,
            recaudacion,
            nota,
            cartelera,
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
                    Formulario Controlado&quot;Películas&quot;
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
                        htmlFor="director"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Director:
                    </label>
                    <input
                        id="director"
                        type="text"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                        aria-invalid={!!error}
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
                        value={clasificacion}
                        onChange={(e) => setClasificacion(e.target.value)}
                        aria-invalid={!!error}
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
                        value={recaudacion}
                        onChange={(e) => setRecaudacion(e.target.value)}
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
                        value={nota}
                        onChange={(e) => setNota(e.target.value)}
                        aria-invalid={!!error}
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
                        value={cartelera}
                        onChange={(e) => setCartelera(e.target.value)}
                        aria-invalid={!!error}
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