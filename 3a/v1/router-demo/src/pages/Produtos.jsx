import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useSearchParams } from 'react-router-dom'

function Produtos() {

    const [produtos, setProdutos] = useState([
        {nome: 'Teclado', valor: '111', quantidade: 15},
        {nome: 'Mouse', valor: '78', quantidade: 22},
        {nome: 'Monitor', valor: '550', quantidade: 8},
        {nome: 'Headset', valor: '130', quantidade: 12},
        {nome: 'Webcam', valor: '95', quantidade: 10},
        {nome: 'Mousepad', valor: '45', quantidade: 30},
        {nome: 'Pendrive', valor: '60', quantidade: 25},
        {nome: 'HD Externo', valor: '320', quantidade: 6},
        {nome: 'Carregador', valor: '85', quantidade: 18},
        {nome: 'Cabo HDMI', valor: '35', quantidade: 40}
    ])

  return (
    <div>
        <Navbar />
        Produtos
    </div>
  )
}

export default Produtos