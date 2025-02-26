programa {
  funcao inicio() {
    inteiro n1, n2
    escreva("Número 1: ")
    leia(n1)
    escreva("Número 2: ")
    leia(n2)
    se(n1 > n2){
      escreva("Primeiro é maior que o segundo")
    }senao{
      se(n2 > n1){
        escreva("Segundo é maior")
      }senao{
        escreva("São iguais")
      }
    }
  }
}
