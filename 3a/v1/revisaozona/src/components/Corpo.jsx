import { useState } from 'react';
import './Corpo.css'
import Produto from './Produto';
function Corpo() {
    const [inputNome, setInputNome] = useState('')
    const [inputDescricao, setInputDescricao] = useState('')
    const [inputPreco, setInputPreco] = useState('')
    const [inputImagem, setInputImagem] = useState('')

    const [produtos, setProdutos] = useState([
        {
            id: Date.now(),
            nome: "Sapato 4x4",
            preco: 123,
            descricao: "Sapato pra toda obra",
            img: './sapatoPlataforma.webp'
            
        },
        {
            id: Date.now()+1,
            nome: "Sela de hamster",
            preco: 444,
            descricao: "Feita com couro sintético",
            img: './selaDeHamster.png'

        },
        {
            id: Date.now()+2,
            nome: "Caneca",
            preco: 44,
            descricao: "Uma caneca genérica",
            img: './caneca.jpg'

        },
        {
            id: Date.now()+3,
            nome: "Curso de Java",
            preco: 4444,
            descricao: "Bom mesmo, rivotril incluso.",
            img: './java-li.png'

        },
    ]);

    function cadastrarProduto(){
        const produto = {
            id: Date.now(),
            nome: inputNome,
            preco: Number(inputPreco),
            descricao: inputDescricao,
            img: inputImagem
            
        }
        // console.log(produto);
        setProdutos([...produtos, produto])
        
    }

    let pontos = 0;
    const [pontosEstado, setPontosEstado] = useState(0)
    function aumentarPontos(){
        pontos++
        console.log(pontos);
    }
    function tratarClique1(){
        alert("Clicou mesmo, olha só...")
    }
  return (
    <div className='corpo-container'>
        Corpo
        <button onClick={tratarClique1}>Clique aqui</button>
        <button onClick={() => alert("arrow function")}>Com arrow function</button>

        <div>
            <button onClick={aumentarPontos}>Pontos-var</button>
            {pontos}
        </div>

        <div>
            <button onClick={() => setPontosEstado(pontosEstado + 1)}>Pontos-state</button>
            {pontosEstado}
        </div>

        <p>Paramos em estado***</p>

        {/* <div className="container-cards">
            <Produto nome={"Sapato Legal"} preco={123.00} descricao={"Sapatin legalzin"} img={'./sapatoPlataforma.webp'} />
            
            <Produto nome={"Sela de Hamster"} preco={666.00} descricao={"Sela para passear de hamster"} img={'./selaDeHamster.png'} />

        </div> */}

        <div className="lista-cards">
            {produtos.map((produto) => (
                <Produto key={produto.id} nome={produto.nome} preco={produto.preco} descricao={produto.descricao} img={produto.img} />
            ))}
        </div>

        <div className="formCadastro">
            <div className="inputContainer">
                <label htmlFor="">Produto:</label>
                <input type="text" 
                    value={inputNome}
                    onChange={(event) => setInputNome(event.target.value)}
                />
            </div>
            <div className="inputContainer">
                <label htmlFor="">Preço:</label>
                <input type="text" 
                    value={inputPreco}
                    onChange={(event) => setInputPreco(event.target.value)}
                />
            </div>
            <div className="inputContainer">
                <label htmlFor="">Descrição: </label>
                <input type="text" 
                    value={inputDescricao}
                    onChange={(event) => setInputDescricao(event.target.value)}
                />
            </div>
            <div className="inputContainer">
                <label htmlFor="">Imagem: </label>
                <input type="text" 
                    value={inputImagem}
                    onChange={(event) => setInputImagem(event.target.value)}
                />
            </div>
            <button onClick={cadastrarProduto}>Cadastrar</button>

        </div>


        
  

    </div>
  )
}

export default Corpo