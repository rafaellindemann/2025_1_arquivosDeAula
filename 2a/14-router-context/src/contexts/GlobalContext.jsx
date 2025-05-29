import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    // aqui cria as informações (variáveis, states, funções...) que serão servidas para todos os componentes pelo contexto
const [usuarioLogado, setUsuarioLogado] = useState('')
let idadeUsuario = '55'
let valorMisterioso = 999


    return(
        <GlobalContext.Provider value={{
            // aqui joga as infos pra "nuvem"
            usuarioLogado,
            setUsuarioLogado,
            idadeUsuario,
            valorMisterioso
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
