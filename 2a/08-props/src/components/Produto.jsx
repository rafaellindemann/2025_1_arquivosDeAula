import './Produto.css'

function Produto(props) {
  return (
    <div className='container-produto'>
        {/* {console.log(props)} */}
        <h2>{props.modelo}</h2>
        <p>R${props.preco.toFixed(2).replace(".", ",")}</p>
        <p>{props.id}</p>
        <button onClick={() => props.deletarProduto(props.id)}>Deletar</button>
    </div>
  )
}

export default Produto