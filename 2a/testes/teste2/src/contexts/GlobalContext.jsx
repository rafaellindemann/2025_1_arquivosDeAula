import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
const [usuarioLogado, setUsuarioLogado] = useState('Gill Bates')
const[usuarios, setUsuarios] = useState([
    {id: 0, nome: 'gillbates', senha: '1234', email: 'gill@sicromoft.com.py'},
])
let idadeUsuario = '55'

    return(
        <GlobalContext.Provider value={{
            usuarioLogado,
            setUsuarioLogado,
            idadeUsuario,
            usuarios
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
