import { useState, useEffect } from 'react'
import './Sorteio.css'

function Sorteio() {
    const[inputNome, setInputNome] = useState('')
    const[nomes, setNomes] = useState([])

    useEffect(() => 
        console.log(nomes)
    ,[nomes])

    function cadastrarNome(){
        // nomes.push(inputNome) NUNCA FAÇA ASSIM, É FEIO, É RUDE, É ERRADO
        setNomes([inputNome, ...nomes])
        setInputNome('')
        // console.log(nomes); nem adianta
    }

    function sortearCliente(){
        let i = Math.floor(Math.random() * nomes.length)

        alert('Cliente sorteado: ' + nomes[i])
    }


  return (
    <div className='container-sorteio'>
        <h2>!! SORTEIO !!</h2>
        <p>Inscreva-se aqui para o sorteio de uma linda camiseta</p>

        <label htmlFor="">Nome</label>
        <input type="text" 
            value={inputNome}
            onChange={(event) => setInputNome(event.target.value)}
        />
        <button onClick={cadastrarNome}>Cadastrar </button>
        <button onClick={sortearCliente}>Sortear</button>

        {/* <div>
            {nomes[0]}
        </div> */}

        {/* {
            movimentacoes.map((m) => (
                // <Pessoa />
                <div>
                    <p className='mov'>Nome:{m.nome}</p>
                    <p className='mov'>Valor:{m.valor}</p>
                </div>
            ))
        } */}
        
    </div>
  )
}

export default Sorteio