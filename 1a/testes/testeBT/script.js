

const elementos = [];

function criarElemento(){
    let nome = prompt("Digite o nome do elemento: ");
    let preco = prompt("Digite o preço do elemento: ");
    let id = Date.now();
    let elemento = {
        id: id,
        nome: nome,
        preco: preco
    }
    elementos.push(elemento);
    console.log(elementos);


    listarElementos();


}


function listarElementos(){
    let lista = document.getElementById('principal');
    lista.innerHTML = "";
    for(let i = 0; i < elementos.length; i++){
        lista.innerHTML += `<div class="elemento">
        <h3>${elementos[i].nome}</h3>
        <p>${elementos[i].preco}</p>
        <button onclick="editarElemento(${elementos[i].id})">Editar</button>
        <button onclick="excluirElemento(${elementos[i].id})">Excluir</button>
        </div>`
    }
}

function editarElemento(id){    
    let elemento = elementos.find(elemento => elemento.id == id);
    let nome = prompt("Digite o nome do elemento: ", elemento.nome);
    let preco = prompt("Digite o preço do elemento: ", elemento.preco);
    elemento.nome = nome;
    elemento.preco = preco;
    listarElementos();
}

function excluirElemento(id){
    let elemento = elementos.findIndex(elemento => elemento.id == id);
    elementos.splice(elemento, 1);
    listarElementos();  
}
