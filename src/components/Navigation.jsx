import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <nav>
        <Link to="/saludo">Saludo</Link>
        <Link to="/contador">Acerca de</Link>
    </nav>
  )
}
