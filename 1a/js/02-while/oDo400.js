
{/* <p>6. Some os números de 1 a 100, mas pare se a soma passar de 400.</p> */}

// - gerar a contagem até 100
// - somar os números
// - parar se deu ruim
// mostrar o resultado
function somar(){
    let soma = 0
    
    let cont = 1 // inicialização da variável de controle
    while(cont <= 100 && soma <= 400){ // setar a condição de repetição
        soma = soma + cont
        console.log('Cont: ' + cont);
        console.log('Soma: ' + soma);
        console.log('==================');

        cont++  // modificação da contagem
    }
    console.log("Soma: " + soma);
}
