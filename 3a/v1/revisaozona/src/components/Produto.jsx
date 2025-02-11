import './Produto.css'
import { BsFire } from "react-icons/bs";
import { GiBrazil } from "react-icons/gi";
// function Produto(props) {
function Produto({img, nome, preco, descricao}) {
  return (
    <div className="container-produto">
        <img src={img} alt="" className='img-produto'/>
        <h2>{nome}</h2>
        <p>R${preco.toFixed(2)}</p>
        <p>{descricao}</p>
        {/* {preco<100 && <p>PROMOÇÃO!!</p>} */}
        {/* {preco<100 && <BsFire />} */}
        {preco<100 && 
            <div className='promo'>
                {/* <p>Promoção</p>  */}
                <BsFire />
                <GiBrazil />
                <p>🌎</p>
            </div>
        }
    </div>
  )
}

export default Produto