
function somar(){
    let n1, n2, soma

    n1 = Number(prompt("Primeiro número: "))
    // n2 = prompt("Segundo número: ")
    // n2 = Number(n2)
    n2 = Number(prompt("Segundo número: "))

    soma = n1 + n2

    alert("Soma: " + soma)
}

function diminuir(){
    let n1, n2, diferenca
    n1 = Number(prompt("Primeiro número: "))
    n2 = Number(prompt("Segundo número: "))
    diferenca = n1 - n2
    alert("Diferença: " + diferenca)
}

function calcularEcoMoedas(){
    let brinquedos, moedas
    brinquedos = Number(prompt("Quantos brinquedos você trouxe?"))
    if(brinquedos < 0){
        alert("Digita direito, pirralho")
    }else{
        if(brinquedos > 3){
            moedas = 3
        }else{
            moedas = brinquedos
        }
        alert("Moedas recebidas:🤩 " + moedas)
    }
    // if(brinquedos < 0){
    //     alert("Digita direito, pirralho")
    // }else{
    //     if(brinquedos >= 0 && brinquedos <= 3){
    //         moedas = brinquedos
    //     }else{
    //         if(brinquedos > 3){
    //             moedas = 3
    //         }
    //     }
    //     alert("Moedas recebidas: " + moedas)
    // }

}

