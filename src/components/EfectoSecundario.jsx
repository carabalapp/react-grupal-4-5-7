import React, { useState, useEffect } from 'react'

export default function EfectoSecundario() {
    const [contador, setContador] = useState(1);

    useEffect(() =>{
        console.log('El contador ha cambiado a:', contador);
    }, [contador])

    return (
      <div>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Incrementar desde UseEffectComponent</button>
      </div>
    )
}
