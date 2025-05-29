import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    // aqui cria as informações (variáveis, states, funções...) que serão servidas para todos os componentes pelo contexto
const [usuarioLogado, setUsuarioLogado] = useState('')
const[usuarios, setUsuarios] = useState([
    {
        id: 0,
        username: 'trampos',
        senha: '1235',
        email: 'trampos@tangerine.com.br'
    }
])
let idadeUsuario = '55'
let valorMisterioso = 999


    return(
        <GlobalContext.Provider value={{
            // aqui joga as infos pra "nuvem"
            usuarioLogado,
            setUsuarioLogado,
            idadeUsuario,
            valorMisterioso,
            usuarios,
            setUsuarios
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
