import { useState } from 'react';
import './Financas2.css';

function Financas2() {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [saldo, setSaldo] = useState(0);
  const [movimentacoes, setMovimentacoes] = useState([]);

  const handleMovimentacao = (tipo) => {
    const valorNum = parseFloat(valor);
    if (isNaN(valorNum) || nome.trim() === '') return;

    const novaMov = {
      nome,
      valor: valorNum,
      tipo, // "crédito" ou "débito"
    };

    // Atualiza o saldo
    // setSaldo((prev) =>
    //   tipo === 'crédito' ? prev + valorNum : prev - valorNum
    // );

    if(tipo === 'crédito') {
      setSaldo((prev) => prev + valorNum);
    }else {
      setSaldo((prev) => prev - valorNum);
    }

    // Adiciona ao array de movimentações
    setMovimentacoes((prev) => [...prev, novaMov]);

    // Limpa os campos
    setNome('');
    setValor('');
  };

  return (
    <div className="container">
        <h1>iMesada</h1>
        <h2>Controlinho Financeiro</h2>
      <div className="saldo">💰 Saldo: R$ {saldo.toFixed(2)}</div>

      <input
        type="text"
        placeholder="Nome da movimentação"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <div className="botoes">
        <button onClick={() => handleMovimentacao('crédito')}>Crédito</button>
        <button onClick={() => handleMovimentacao('débito')}>Débito</button>
      </div>

      <h2>📋 Kowalski, relatório! 🐧</h2>
      <div className="lista">
        {movimentacoes.map((mov, index) => (
          <p key={index} className={mov.tipo}>
            <strong>{mov.nome}</strong> - R$ {mov.valor.toFixed(2)} ({mov.tipo})
          </p>
        ))}
      </div>
    </div>
  );
}

export default Financas2;
