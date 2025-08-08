
  import './App.css'

  function App() {
const produtos = [
  {
    id: 1,
    nome: "Manalisa",
    preco: 150,
    precoPromocional: 150,
    diasEmVenda: 11
  },
  {
    id: 2,
    nome: "A última janta",
    preco: 100,
    precoPromocional: 100,
    diasEmVenda: 48
  },
  {
    id: 3,
    nome: "O campo de girassóis",
    preco: 300,
    precoPromocional: 300,
    diasEmVenda: 32
  },
  {
    id: 4,
    nome: "O cara pensando",
    preco: 743,
    precoPromocional: 743,
    diasEmVenda: 294
  },
  {
    id: 5,
    nome: "A Honda noturna",
    preco: 34,
    precoPromocional: 34,
    diasEmVenda: 29
  },
  {
    id: 6,
    nome: "A escola de Antenas",
    preco: 90,
    precoPromocional: 90,
    diasEmVenda: 7
  },
  {
    id: 7,
    nome: "As suas francesas",
    preco: 340,
    precoPromocional: 340,
    diasEmVenda: 84
  },
  {
    id: 8,
    nome: "Moça com brinco de argola",
    preco: 40,
    precoPromocional: 40,
    diasEmVenda: 78
  },
  {
    id: 9,
    nome: "O berro",
    preco: 140,
    precoPromocional: 140,
    diasEmVenda: 28
  },
  {
    id: 10,
    nome: "Michel de Davilângelo",
    preco: 410,
    precoPromocional: 410,
    diasEmVenda: 45
  },
  {
    id: 11,
    nome: "Noite estragada",
    preco: 239,
    precoPromocional: 239,
    diasEmVenda: 15
  },
];

    return (
      <div>
        <h1>Produtos em Venda</h1>
        <ul>
          {produtos.map((produto, index) => (
            <li key={index}>
              <h2>{produto.nome}</h2>
              <p>Preço: R$ {produto.preco}</p>
              <p>Preço de Liquidação: R$ {produto.precoLiquidacao}</p>
              <p>Dias em Venda: {produto.diasEmVenda}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  export default App
