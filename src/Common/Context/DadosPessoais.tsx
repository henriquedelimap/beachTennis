import { ApiCep } from "../../Pages/Carrinho/Dados/buscarCep/Services";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { consultarCep } from "correios-brasil/dist";

export interface IDadosPessoais {
    [x: string]: any
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


interface Prop {
    children?: ReactNode
}
export const DadosPessoaisProvider = (prop: Prop) => {
    const [perfil, setPerfil] = useState<IDadosPessoais>({
        nome: '',
        sobrenome: '',
        telefone: '',
        cep: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
    })

    return (
        <DadosPessoaisContext.Provider value={{ perfil, setPerfil }}>
            {prop.children}
        </DadosPessoaisContext.Provider>
    )
}


export const usePerfilContext = () => {
    const { perfil, setPerfil } = useContext(DadosPessoaisContext) as IDadosPessoaisContext
    const { register, handleSubmit } = useForm()
    const onSubmit: SubmitHandler<any> = data => setPerfil(data);
    ;


    const cep = perfil.cep === undefined ? '0000000' : perfil.cep
    function consultaCep(cep: any) {
        ApiCep.SearchCep(cep).then((res) => {
            console.log(res);
            
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


    function adicionaDadosAoPerfil(label: string, value: string) {
    };

    return {
        perfil,
        setPerfil,
        adicionaDadosAoPerfil,
        register,
        handleSubmit,
        onSubmit,
        consultaCep
    }
}
