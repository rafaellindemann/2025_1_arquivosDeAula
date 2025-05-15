
function Cadastro() {
  return (
    <div>
        <h1>Cadastro</h1>
        <div className="inputContainer">
            <label htmlFor="">Nome</label>
            <input type="text" />
        </div>
        <div className="inputContainer">
            <label htmlFor="">E-mail</label>
            <input type="text" />
        </div>
        <button>CADASTRAR AÍ</button>
    </div>

  )
}

export default Cadastro