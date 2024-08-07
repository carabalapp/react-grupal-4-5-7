import { useState } from "react"

export function Contador() {
    const [contador, setContador] = useState(0)

    const incrementar = () => {
        if(contador < 20){
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if(contador > 0) {
            setContador(contador - 1)
        }
    }

    const resetear = ()  => {
        setContador(0)
    }
    return (
        <div style={{ marginBottom: '20px'}}>
            <h2>Contador: {contador}</h2>
            <button className="btn btn-primary" onClick={incrementar}>Incrementar</button>
            <button className="btn btn-primary" onClick={decrementar}>Decrementar</button>
            <button className="btn btn-primary" onClick={resetear}>Resetear</button>
        </div>
    )
}