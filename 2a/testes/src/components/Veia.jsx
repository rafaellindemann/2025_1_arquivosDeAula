import { useState } from 'react';

function Veia() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const vencedor = calcularVencedor(tabuleiro);

  function handleClick(index) {
    if (tabuleiro[index] || vencedor) return;

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[index] = xIsNext ? 'X' : 'O';
    setTabuleiro(novoTabuleiro);
    setXIsNext(!xIsNext);
  }

  function renderizarCelula(index) {
    return (
      <button className="celula" onClick={() => handleClick(index)}>
        {tabuleiro[index]}
      </button>
    );
  }

  function reiniciarJogo() {
    setTabuleiro(Array(9).fill(null));
    setXIsNext(true);
  }

  const status = vencedor
    ? `Vencedor: ${vencedor}`
    : `Próximo jogador: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="jogo">
      <h2>Jogo da Velha</h2>
      <div className="status">{status}</div>
      <div className="tabuleiro">
        <div className="linha">
          {renderizarCelula(0)}
          {renderizarCelula(1)}
          {renderizarCelula(2)}
        </div>
        <div className="linha">
          {renderizarCelula(3)}
          {renderizarCelula(4)}
          {renderizarCelula(5)}
        </div>
        <div className="linha">
          {renderizarCelula(6)}
          {renderizarCelula(7)}
          {renderizarCelula(8)}
        </div>
      </div>
      <button className="reiniciar" onClick={reiniciarJogo}>
        Reiniciar
      </button>

      <style jsx>{`
        .jogo {
          text-align: center;
          font-family: sans-serif;
        }
        .tabuleiro {
          display: inline-block;
        }
        .linha {
          display: flex;
        }
        .celula {
          width: 60px;
          height: 60px;
          font-size: 24px;
          margin: 5px;
          cursor: pointer;
        }
        .status {
          margin: 20px;
          font-weight: bold;
        }
        .reiniciar {
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}

// Função auxiliar para verificar vencedor
function calcularVencedor(casas) {
  const linhas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of linhas) {
    if (casas[a] && casas[a] === casas[b] && casas[a] === casas[c]) {
      return casas[a];
    }
  }
  return null;
}

export default Veia;
