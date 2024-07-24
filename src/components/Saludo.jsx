export function Saludo() {
    let mostrarMensaje = 19
    let mensajeVerdad = 'Mensaje condicionado verdadero'
    let mensajeFalso = 'Mensaje condicionado falso'

    return (
        <div>
            {/* Operadores ternarios */}
            {/* La primera condicion se cumple siempre y cuando sea distinta de false, null, undefined o vacio. */}
            { mostrarMensaje <= 19 ? <p>{mensajeVerdad}</p> : <p>{mensajeFalso}</p>}
        </div>
    );
}