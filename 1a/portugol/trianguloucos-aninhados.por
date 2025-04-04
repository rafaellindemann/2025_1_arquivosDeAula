// Desenvolva um programa que determine se um triângulo é escaleno, isósceles ou equilátero, com base nos comprimentos dos seus lados.

programa {
  funcao inicio() {
    inteiro l1, l2, l3
    se(l1==l2 e l1==l3){
      escreva("Equilatero")
    }senao{
      se(l1!=l2 e l1!=l3 e l2!=l3){
        escreva("Escaleno")
      }senao{
        escreva("Isóceles")
      }
    }
  }
}


