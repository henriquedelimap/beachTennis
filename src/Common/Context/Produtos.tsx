import { Data } from "../../assets/data";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import {IRaquete} from '../../Types'
import { FormatPrice } from "../../Utils";
interface Prop {
    children?: ReactNode
}

interface IProdutosContextType {
    produtos: string
    setProdutos : Dispatch<SetStateAction<string>>
}

export const ProdutosContext = createContext<IProdutosContextType | undefined>(undefined)
ProdutosContext.displayName = 'produtos'

export const ProdutosProvider = (prop: Prop ) => {
    const [produtos, setProdutos] = useState('')
    
    return (
        <ProdutosContext.Provider value={{produtos, setProdutos}}>
            {prop.children}
        </ProdutosContext.Provider>
    )
}


export const useProdutosContext = ( ) => {
    const { produtos, setProdutos } = useContext(ProdutosContext) as IProdutosContextType

    
    return {
        produtos
    }
}