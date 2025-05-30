import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function Melancias() {
    const navigate = useNavigate()
    const {valorMisterioso} = useContext(GlobalContext)
    function navegar(){
        let nome = prompt("username")
        if(nome == 'gillBates'){
            navigate('/final')
        }else{
            alert("Errou, última tentativa:")
        }
    }
  return (
    <div>
        <Navbar />
        <h1>Melancias</h1>
        <button onClick={navegar}>Navegar para final</button>
        {valorMisterioso}
        
    </div>
  )
}

export default Melancias