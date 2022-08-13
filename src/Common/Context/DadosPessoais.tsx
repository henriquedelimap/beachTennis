import { ApiCep } from "../../Pages/Carrinho/Dados/buscarCep/Services";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface IDadosPessoais {
    nome?: string
    sobrenome?: string
    telefone?: string
    cep?: string
    rua?: string
    bairro?: string
    cidade?: string
    estado?: string
}

interface IDadosPessoaisContext {
    perfil: IDadosPessoais
    setPerfil: Dispatch<SetStateAction<IDadosPessoais>>
}

export const DadosPessoaisContext = createContext<IDadosPessoaisContext | undefined>(undefined)
DadosPessoaisContext.displayName = 'dados pessoais'


interface Prop{
    children?: ReactNode
}
export const DadosPessoaisProvider = (prop: Prop) => {
    const [perfil, setPerfil] = useState<IDadosPessoais>({})

    return (
        <DadosPessoaisContext.Provider value={{perfil, setPerfil}}>
            {prop.children}
        </DadosPessoaisContext.Provider>
    )
}


export const usePerfilContext = () => {
    const {perfil, setPerfil} = useContext(DadosPessoaisContext) as IDadosPessoaisContext

    const cep = perfil.cep === undefined ? '0000000' : perfil.cep

    if(perfil.cep !== '') {
        ApiCep.SearchCep(cep).then((res) => {
            let rua = res.data.logradouro;
            let bairro = res.data.bairro;
            let cidade = res.data.localidade;
            let estado = res.data.uf;

            setPerfil({
                rua: rua,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            })
        })
    }

    return {
        perfil, 
        setPerfil
    }
}
