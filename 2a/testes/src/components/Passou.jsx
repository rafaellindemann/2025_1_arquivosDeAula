import { useState } from 'react';

function Passou() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularResultado(){
    let n1 = Number(nota1);
    let n2 = Number(nota2);
    let media = (n1 + n2) / 2;

    if (media >= 7) {
      setResultado('Aprovado');
    } else if (media >= 4) {
      setResultado('Recuperacao');
    } else {
      setResultado('Reprovado');
    }
  }

  return (
    <div className='container'>
      <h2>Verificar Situação do Aluno</h2>
      <input type="number"
        value={nota1}
        onChange={(event) => setNota1(event.target.value)}
      />
      <input type="number"
        value={nota2}
        onChange={(event) => setNota2(event.target.value)}
      />
      <button onClick={calcularResultado} >Verificar</button>
        Resultado: {resultado}
    </div>
  )
}

export default Passou;