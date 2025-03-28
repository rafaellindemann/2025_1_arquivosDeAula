programa {
  funcao inicio() {
    inteiro numero
    escreva("Digite o número: ")
    leia(numero)
    // se(numero == 0){
    //   escreva("Será que zero é par")
    //   escreva("Temos várias correntes de pensamento")
    //   escreva("tem gente que diz que sim")
    //   escreva("Tem gente que diz que não")
    //   escreva("Tem gente que me ignora quando eu pergunto")
    //   escreva("Tenho uma gaveta cheia de bonecos e agulhas")
    // }

    se(numero % 3 == 0){
      escreva("É múltiplo de 3")
    }senao{
      escreva("Não é múltiplo de 3")
    }
  }
}
