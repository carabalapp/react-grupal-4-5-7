import React, { useState } from 'react'

export function InputControlado() {
    const [texto, setTexto] = useState('')

    const tomarCambio = (event) => {
        setTexto(event.target.value)
    }
  return (
    <div>
        <input type="text" value={texto} onChange={tomarCambio} />
        <p>Texto ingresado: {texto}</p>
    </div>
  )
}
