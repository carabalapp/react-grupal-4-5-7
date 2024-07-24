export function ListaEstudiantes({estudiantes, mostrarLista}) {

    return(
        <div>
            <h2>Estudiantes:</h2>
            {
                mostrarLista ? 
                    <ul>
                        {estudiantes.map((estudiante, index) => (
                            <li key={index}>
                                <p>Nombre: {estudiante.nombre}</p>
                                <p>Edad: {estudiante.edad}</p>
                            </li>
                        ))}
                    </ul>
                : <p>No hay estudiantes disponibles</p>
            }
        </div>
    )
}