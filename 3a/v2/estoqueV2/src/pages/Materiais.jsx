import { useState } from 'react'
import './Materiais.css'
import { useEffect } from 'react'
import CardMaterial from '../components/CardMaterial'

function Materiais() {
    const [materiais, setMateriais] = useState([])
    const [inputNome, setInputNome] = useState('')
    const [inputQuantidade, setInputQuantidade] = useState('')
    const [inputUnidade, setInputUnidade] = useState('')

    function cadastrarMaterial(){
        const m = {
            id: Date.now(),
            nome: inputNome,
            quantidade: Number(inputQuantidade),
            unidade: inputUnidade
        }
        setMateriais([...materiais, m])
    }
    useEffect(() => 
        console.log(materiais)
    , [materiais])
  return (
    <div className="container-materiais">
        <h1>Materiais</h1>
        <div className="formMateriais">
            <h2>Cadastro de materiais</h2>
            <div className="inputContainer">
                <label htmlFor="">Nome</label>
                <input type="text" 
                    value={inputNome}
                    onChange={() => setInputNome(event.target.value)}
                />
            </div>
            <div className="inputContainer">
                <label htmlFor="">Quantidade</label>
                <input type="text" 
                    value={inputQuantidade}
                    onChange={() => setInputQuantidade(event.target.value)}
                />
            </div>
            <div className="inputContainer">
                <label htmlFor="">Unidade</label>
                <input type="text" 
                    value={inputUnidade}
                    onChange={() => setInputUnidade(event.target.value)}
                />
            </div>
            <button onClick={cadastrarMaterial}>Cadastrar</button>
        </div>
        <div className="estoque">
            <h2>Estoque</h2>
            <div className="cardsMateriais">
                {materiais.map((m) => (
                    <CardMaterial key={m.id} material={m}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Materiais