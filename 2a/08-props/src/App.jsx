import { useEffect, useState } from 'react'
import './App.css'
import Produto from './components/Produto'

function App() {
  const[inputModelo, setInputModelo] = useState('')
  const[inputPreco, setInputPreco] = useState('')
  const[produtos, setProdutos] = useState([
    {id: Date.now(), modelo: "Melancia", preco: 22},
    {id: Date.now()+1, modelo: "Pneu", preco: 220},
    {id: Date.now()+2, modelo: "Garrafa", preco: 2},
    {id: Date.now()+3, modelo: "Notebook", preco: 6000},
    {id: Date.now()+4, modelo: "Desktop pra jogar lol", preco: 600},
  ])

  useEffect(() =>
    console.log(produtos)
    ,[produtos])

  useEffect(() =>
    console.log("Carregando dados...")
  ,[])

  function testar(){
    let produto = {
      id:Date.now(), 
      modelo: "Produto Secreto",
      preco: 10
    }
    setProdutos([produto, ...produtos])
  }
  function cadastrar(){
    let produto = {
      id:Date.now(), 
      modelo: inputModelo,
      preco: Number(inputPreco)
    }
    setProdutos([produto, ...produtos])
  }

  return (
    <div className='container-app'>
      <div className='form-produto'>
        <label htmlFor="">Modelo</label>
        <input type="text" 
          value={inputModelo}
          onChange={(event) => setInputModelo(event.target.value)}  
          />
        <label htmlFor="">Preço</label>
        <input type="number" 
          value={inputPreco}
          onChange={(event) => setInputPreco(event.target.value)}  
        />
        <button onClick={cadastrar}>Cadastrar</button>
      </div>

      {/* <Produto modelo={"Galaxy A15"} preco={809}/>
      <Produto modelo={`Smart TV 32" Full HD LED TCL`} preco={971.10}/>
      <Produto modelo={produtos[0].modelo} preco={produtos[0].preco}/>
      <Produto modelo={produtos[1].modelo} preco={produtos[1].preco}/>
      <Produto modelo={produtos[2].modelo} preco={produtos[2].preco}/> */}

      <button onClick={testar}>TESTAR</button>

      {/* {produtos.map((p, index) => (
        <Produto key={index} modelo={p.modelo} preco={p.preco} />
      ))} */}

      <div className="cards">
        {produtos.map((p) => (
          <Produto key={p.id} modelo={p.modelo} preco={p.preco} id={p.id} />
        ))}
      </div>


    </div>
  )
}

export default App
