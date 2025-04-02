programa {
  funcao inicio() {
    inteiro numeroLados, tamanhoLado
    real area
    escreva("Quantos lados: ")
    leia(numeroLados)
    se(numeroLados < 5 ){
      escreva("Tamanho do lado (cm): ")
      leia(tamanhoLado)
    }
    se(numeroLados == 3){
      area = (tamanhoLado*tamanhoLado) / 2
      escreva("Triângulo!\nÁrea: ", area,"cm2")
    }senao{ // não é triângulo
      se(numeroLados == 4){ 
        area = tamanhoLado * tamanhoLado
        escreva("Quadrado!\nÁrea: ", area,"cm2")
      }senao{
        se(numeroLados == 5){
          escreva("É um pentágono!!")
        }
      }
    }
  }
}









