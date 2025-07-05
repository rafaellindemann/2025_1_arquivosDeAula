import './App.css'

function App() {

  function demonstrarWhile(){
    // console.log('Funcionei');
    let cont = 0
    while(cont < 10){
      cont++
      console.log(cont);
    }
  }

  function revisarWhile(){ // somente exemplo
    let i = 0 // 1o grande pilar da repetição
    while(i < 10){ // 2o
      // coisa a ser repetida
      i++ // 3o
    }
  }

  function lerValores(){
    let soma = 0, valor
    let i = 0
    while(i < 3){
      i++
      valor = Number(prompt(`Digite o ${i}o valor: `))
      soma += valor //soma = soma + valor
    }
    alert("Soma: " + soma)
  }

  function demoDoWhile(){ // garantir que o valor é positivo
    let valor
    do{
      valor = Number(prompt("Digita um positivo:"))
    // }while(valor <= 0);
    }while(!(valor > 0));
    alert('O valor digitado foi: ' + valor)
  }

  function demoFor(){
    
    for(let i=0; i<10; i++){
      console.log(i);
      
    }
  }

  function gerarTabuada(){
    let n = Number(prompt("Você quer a tabuada de qual número?"))
    for(let i=1; i<=10; i++){
      //          1x2=2
      let resultado = i*n
      console.log(i+'x'+n+'='+ resultado);      
    }
  }

  function gerarTabela(){
    for(let i=1; i<=500; i++){
      let preco = i * 0.33
      console.log(i + ": R$" + preco.toFixed(2).replace('.', ','));
    }
  }

  function gerarIntervalo(){
    // for(let i=10; i<=1000; i++){
    //   if(i<=500 || i>=900){
    //     console.log(i);
    //   }
    // }
    for(let i=10; i<=1000; i++){
      if(i==501){
        i=900
      }
      console.log(i);
    }
  }

  return (
    <>
      <h1>Repetições</h1>
      <section>
        <h2>while</h2>
        <button onClick={demonstrarWhile}>demo while</button>
        <button onClick={lerValores}>ler valores</button>
        <button onClick={demoDoWhile}>do while</button>
        <button onClick={demoFor}>for</button>
        <button onClick={gerarTabuada}>Tabuada</button>
        <button onClick={gerarTabela}>Xerox</button>
        <button onClick={gerarIntervalo}>Intervalão</button>
      </section>
      {/* <section>
        <h2>for</h2>
      </section>
      <section>
        <h2>do-while</h2>
      </section> */}

    </>
  )
}

export default App
