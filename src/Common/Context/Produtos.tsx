import { Data } from "../../assets/data";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import {IRaquete} from '../../Types'
interface Prop {
    children?: ReactNode
}

interface IProdutosContextType {
    produtos: IRaquete[] | undefined
    setProdutos : Dispatch<SetStateAction<IRaquete[] | undefined>>
}

export const ProdutosContext = createContext<IProdutosContextType | IRaquete[]>([{
        id: 1,
        quantity: 0,        
        img: [],
        title: '',
        subtitle: '',
        price: {
            original: 0,
            sale: 0
        },
        chips: ['', ''],
        year: '',
        stored: 0,
        description: ``,
        subDescription: ``,
        weight: 0,
        dimensions: [0, 0, 0],
        color: ['', ''],
        material: [''],
        role: {
            category: '',
            brand: null
        }
    }])
ProdutosContext.displayName = 'produtos'

export const ProdutosProvider = (prop: Prop ) => {
    const [produtos, setProdutos] = useState<IRaquete[]>()
    
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