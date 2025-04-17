import './Produto.css'

function Produto(props) {
  return (
    <div className='container-produto'>
        {/* {console.log(props)} */}
        <h2>{props.modelo}</h2>
        <p>R${props.preco.toFixed(2).replace(".", ",")}</p>
    </div>
  )
}

export default Produto