import React, { useState } from 'react';

function BombaDeAr() {
  const [desejada, setDesejada] = useState('');
  const [lida, setLida] = useState('');
  const [diferenca, setDiferenca] = useState();

  function calcular() {
      const resultado = desejada - lida;
      setDiferenca(resultado);
  }

  return (
    <div className='container'>
        <h2>Bomba de Ar SBC - Paróquia Tech</h2>
        Pressão desejada:
        <input value={desejada} onChange={e => setDesejada(e.target.value)} />
        Pressão lida:
        <input value={lida} onChange={e => setLida(e.target.value)} />
        <button onClick={calcular}>Calcular Diferença</button>
        <p>Diferença: {diferenca}</p>
    </div>
  );
}

export default BombaDeAr;
