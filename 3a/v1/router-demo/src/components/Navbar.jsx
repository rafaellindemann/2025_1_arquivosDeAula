import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {
  return (
    <div className="container-navbar">
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/avisos">Avisos</Link>
        <Link to="/contato">Contato</Link>
    </div>
  )
}

export default Navbar