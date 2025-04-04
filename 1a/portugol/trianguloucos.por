// Desenvolva um programa que determine se um triângulo é escaleno, isósceles ou equilátero, com base nos comprimentos dos seus lados.

programa {
  funcao inicio() {
    inteiro l1, l2, l3
    se(l1==l2 e l1==l3){
      escreva("Equilatero")
    }
    se(l1!=l2 e l1!=l3 e l2!=l3){
      escreva("Escaleno")
    }
    se(l1!=l2 e l2==l3 ou 
      l2!=l1 e l1==l3 ou 
      l3!=l1 e l1==l2){
      escreva("Isóceles")
    }
  }
}


