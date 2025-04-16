import React from 'react'

function Produto(props) {
  return (
    <div className='container'>
        <h2>Card de produto</h2>
        {props.produto.nome}
    </div>
  )
}

export default Produto