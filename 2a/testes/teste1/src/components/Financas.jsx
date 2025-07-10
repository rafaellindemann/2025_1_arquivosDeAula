import { useState } from 'react';
import './Financas.css';

function Financas() {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [saldo, setSaldo] = useState(0);

  const handleCredito = () => {
    const valorNum = parseFloat(valor);
    if (!isNaN(valorNum)) {
      setSaldo((prev) => prev + valorNum);
      limparCampos();
    }
  };

  const handleDebito = () => {
    const valorNum = parseFloat(valor);
    if (!isNaN(valorNum)) {
      setSaldo((prev) => prev - valorNum);
      limparCampos();
    }
  };

  const limparCampos = () => {
    setNome('');
    setValor('');
  };

  return (
    <div className="container">
      <h1>iMesada</h1>
      <h2>Controlinho Financeiro</h2>
      <div className="saldo">💰 Saldo: R$ {saldo.toFixed(2)}</div>
      {/* <input
        type="text"
        placeholder="Nome da movimentação"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      /> */}
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <div className="botoes">
        <button onClick={handleCredito}>Crédito</button>
        <button onClick={handleDebito}>Débito</button>
      </div>
    </div>
  );
}

export default Financas;
