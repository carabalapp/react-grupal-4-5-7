import React, { useState } from 'react'

export function CambioEstado() {
    const [activo, setActivo] = useState(false)

    const cambiarEstado = () => {
        setActivo(!activo)
    }

    return (
        <div>
            <button onClick={cambiarEstado}>{activo ? 'Desactivar' : 'Activar'}</button>
            <p>Estado: {activo ? 'Activo' :  'Inactivo'}</p>
        </div>
    )
}
