import './Corpo.css'
function Corpo(){
    function alertarUsuario(){
        alert("Cuidadooooo!!")
    }
    return (
        <div className="container-corpo">
            <h1>Desbravando o React</h1>
            <p>Vamos começar a nossa aventura!</p>
            <button onClick={alertarUsuario}>Alerta</button>
            <img onClick={alertarUsuario} className='imagem' src="./spino.png" alt="" />
            6+6={6+6}
            
            
        </div>
    )
}

export default Corpo;