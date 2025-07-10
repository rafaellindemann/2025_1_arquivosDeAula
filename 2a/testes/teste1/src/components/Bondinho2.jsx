import React, { useState } from 'react';
function Bondinho2() {
  const [alunos, setAlunos] = useState('');
  const [monitores, setMonitores] = useState('');
  const [resultado, setResultado] = useState('');
  function verificarViagem() {
    const total = alunos + monitores;
    if (total <= 50) {
      setResultado('Liberado');
    } else {
      setResultado('Proibido');
    }
  }
  return (
    <div className='container'>
      <h2>Excursão no Bondinho</h2>
      Quantidade de alunos:
      <input
        value={alunos}
        onChange={e => setAlunos(e.target.value)}
        type="number"
      />
      Quantidade de monitores:
      <input
        value={monitores}
        onChange={e => setMonitores(e.target.value)}
        type="number"
      />
      <button onClick={verificarViagem}>Verificar Viagem</button>
      <p>Resultado: {resultado}</p>
    </div>
  );
}
export default Bondinho2;



