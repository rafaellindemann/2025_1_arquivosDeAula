import {useState} from 'react'
import Produto from './Produto'

function Desestruturacao() {

    const estado = useState(0)
    const [valor, setValor] = estado

    const produto = {
        nome: "Sapato",
        preco: 50
    }

    const {nome, preco} = produto

    return (
        <div className='container'>
        {/* {console.log(estado)} */}

        {console.log(preco)}
        Desestruturacao
        <Produto produto={produto}/>

    </div>
  )
}

export default Desestruturacao