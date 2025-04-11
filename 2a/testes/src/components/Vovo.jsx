import { useState } from 'react';

function Vovo() {
  const [valorAntigo, setValorAntigo] = useState('');
  const [valorNovo, setValorNovo] = useState('');
  const [aumento, setAumento] = useState('');

  function calcularAumento() {
    const antigo = Number(valorAntigo);
    const novo = Number(valorNovo);

    if (antigo > 0 && novo >= antigo) {
      const diferenca = novo - antigo;
      const porcentagem = (diferenca / antigo) * 100;
      setAumento(`${porcentagem.toFixed(2)} %`);
    } else {
      setAumento('Valores inválidos');
    }
  }

  return (
    <div className="container">
      <h2>Cartaz da Vovó Zazá</h2>
      Valor antigo:
      <input type="number"
        value={valorAntigo}
        onChange={(e) => setValorAntigo(e.target.value)}
      />
      Valor novo:
      <input type="number"
        value={valorNovo}
        onChange={(e) => setValorNovo(e.target.value)}
      />
      <button onClick={calcularAumento}>Calcular Aumento</button>
      <p>Aumento: {aumento}</p>
    </div>
  );
}

export default Vovo;
