import { Data } from "../../assets/data";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import {IRaquete} from '../../Types'
interface Prop {
    children?: ReactNode
}

interface IProdutosContextType {
    produtos: IRaquete[]
    setProdutos: Dispatch<SetStateAction<IRaquete[]>>
}

export const ProdutosContext = createContext<IProdutosContextType | IRaquete[] >(Data)
ProdutosContext.displayName = 'produtos'

export const ProdutosProvider = (prop: Prop ) => {
    const [produtos, setProdutos] = useState<IRaquete[]>(Data)

    return (
        <ProdutosContext.Provider value={{produtos, setProdutos}}>
            {prop.children}
        </ProdutosContext.Provider>
    )
}


export const useProdutosContext = ( ) => {
    const { produtos, setProdutos } = useContext(ProdutosContext) as IProdutosContextType
    
    return {
        produtos, 
        setProdutos
    }
}