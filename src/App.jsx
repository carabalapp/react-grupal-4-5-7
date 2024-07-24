import { ListaEstudiantes } from "./components/ListaEstudiantes";
import { Saludo } from "./components/Saludo";

export function App() {

  const estudiantes = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Luney', edad: 23 },
    { nombre: 'Cesar', edad: 28 },
    { nombre: 'Adrian', edad: 31 }
  ]

  return (
    <div>
      <h1>Hello World</h1>

      {/* Pasando props de un componente padre (App) a un componente hijo (ListaEstudiantes) */}
      <ListaEstudiantes estudiantes={estudiantes} mostrarLista={true}/>
      <Saludo/>
    </div>
  );
}
