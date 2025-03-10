import './CardMaterial.css'
function CardMaterial(props) {
    const {nome, quantidade, unidade} = props.material
  return (
    <div className="container-card">
        <h3>Nome: {nome}</h3>
        <p>Qtd: {quantidade}{unidade}</p>
    </div>
  )
}

export default CardMaterial