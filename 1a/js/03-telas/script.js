
// let nome, email, senha

inicializar()


let usuario = {
    nome: '',
    email: '',
    senha: ''
}

function cadastrar(){
    usuario.nome = document.getElementById('inpCadNome').value
    usuario.email = document.getElementById('inpCadEmail').value
    usuario.senha = document.getElementById('inpCadSenha').value
    alert("Cadastrado com sucesso!! :D")

    console.log(usuario)

    limparInputs()
    mostrarLogin()
    
}

function logar(){
    let nome = document.getElementById('inpLogNome').value
    let senha = document.getElementById('inpLogSenha').value

    if((nome === usuario.nome || nome === usuario.email) && senha === usuario.senha){
        alert("Login efetuado com sucesso!")
        limparInputs()
        mostrarProdutos()
        // document.getElementById('navbar').style.display = 'block'
    }else{
        alert("Login não efetuado sem sucesso!")
    }
}



function mostrarLogin(){
    esconderTodas()
    document.getElementById('login').style.display = 'flex'
    document.getElementById('inpLogNome').focus()

}
function mostrarCadastro(){
    esconderTodas()
    document.getElementById('cadastro').style.display = 'flex'
    document.getElementById('inpCadNome').focus()
}

function mostrarProdutos(){
    esconderTodas()
    document.getElementById('produtos').style.display = 'flex'
}


function esconderTodas(){
    document.getElementById('login').style.display = 'none'
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('produtos').style.display = 'none'
    // esconder novas páginas
}


function limparInputs(){
    document.getElementById('inpCadNome').value = ''
    document.getElementById('inpCadEmail').value = ''
    document.getElementById('inpCadSenha').value = ''

    document.getElementById('inpLogNome').value = ''
    document.getElementById('inpLogSenha').value = ''
}

function inicializar(){
    mostrarLogin()

}