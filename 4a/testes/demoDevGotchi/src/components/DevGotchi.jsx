import { useState, useEffect } from 'react';

function DevGotchi() {
  const [vida, setVida] = useState(100);
  const [vivo, setVivo] = useState(true);

  useEffect(() => {
    if (!vivo) return;

    const intervalo = setInterval(() => {
        if (vida <= 1) {
            clearInterval(intervalo);
            setVivo(false);
            return 0;
        }
        setVida((vidaAtual) => vidaAtual - 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [vivo]);
//     const intervalo = setInterval(() => {
//       setVida((vidaAtual) => {
//         if (vidaAtual <= 1) {
//           clearInterval(intervalo);
//           setVivo(false);
//           return 0;
//         }
//         return vidaAtual - 1;
//       });
//     }, 1000);

//     return () => clearInterval(intervalo);
//   }, [vivo]);

  function curar(){
    if (vivo) {
      setVida((vidaAtual) => vidaAtual + 10);
    }
  };

  return (
    <div>
      <h1>devGotchi</h1>
      <p>Vida: {vida}</p>
      {!vivo ? (
        <p style={{ color: 'red' }}>Seu devGotchi morreu...</p>
      ) : (
        <button onClick={curar}>Curar</button>
      )}
    </div>
  );
}

export default DevGotchi;
