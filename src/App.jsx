import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { CambioEstado } from "./components/CambioEstado";
import { Contador } from "./components/Contador";
// import EfectoSecundario from "./components/EfectoSecundario";
// import { InputControlado } from "./components/InputControlado";
// import { ListaEstudiantes } from "./components/ListaEstudiantes";
import { Saludo } from "./components/Saludo";
import { Pokemon } from "./components/Pokemon";
// import { Navigation } from "./components/Navigation";


export function App() {
  // Configuracion antes de Routing 

  // const estudiantes = [
  //   { nombre: 'Juan', edad: 20 },
  //   { nombre: 'Luney', edad: 23 },
  //   { nombre: 'Cesar', edad: 28 },
  //   { nombre: 'Adrian', edad: 31 }
  // ]

  // return (
  //   <div>
  //     <h1>Hello World</h1>

  //     {/* Pasando props de un componente padre (App) a un componente hijo (ListaEstudiantes) */}
  //     <ListaEstudiantes estudiantes={estudiantes} mostrarLista={true}/>
  //     <Saludo/>
  //     <Contador/>
  //     <CambioEstado/>
  //     <br /><br />
  //     <InputControlado/>
  //     <EfectoSecundario/>
  //     <Pokemon/>
  //   </div>
  // );

  // Configuracion Post Routing

  return (
    <div className="container">
      <Router>
        <nav className="nav">
          <Link className="nav-link" to="/saludo">Saludo</Link>
          <Link className="nav-link" to="/contador">Contador</Link>
          <Link className="nav-link" to="/ver-pokemon">Ver Pokemon</Link>
        </nav>
        <Routes>
          <Route path="/saludo" exact element={<Saludo />} />
          <Route path="/contador" element={<Contador />}></Route>
          <Route path="/ver-pokemon" element={<Pokemon />}></Route>
        </Routes>
      </Router>
    </div>
  )
}