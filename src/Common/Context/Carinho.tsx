import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { IRaquete } from "../../Types";
import {useSnackbar} from 'notistack'
interface Prop {
    children?: ReactNode
}

export interface CarrinhoContextType {
    carrinho: IRaquete[]
    setCarrinho: Dispatch<SetStateAction< IRaquete[]>>
}

export const CarrinhoContext = createContext<CarrinhoContextType | undefined[]>([undefined])
CarrinhoContext.displayName = 'Carrinho'


export const CarrinhoProvider = (prop: Prop) => {
    const [carrinho, setCarrinho] = useState<IRaquete[]>([])
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {prop.children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const {carrinho, setCarrinho} = useContext(CarrinhoContext) as CarrinhoContextType
    const {enqueueSnackbar} = useSnackbar()
    function adicionarProduto(novoProduto: IRaquete) {
        const alreadyExist = carrinho.some(itemCarrinho => itemCarrinho.id === novoProduto.id)
        enqueueSnackbar(`${novoProduto.title} foi adicionado ao carrinho`,  { variant: 'success' })
        if(!alreadyExist){
            novoProduto.quantity = 1
            return setCarrinho(prev => [...prev, novoProduto])
        } 
        setCarrinho((prev: IRaquete[]) => prev.map((item: IRaquete) => {
            if(item.id === novoProduto.id) item.quantity += 1
            return item
        }))
    }

    return {
        carrinho, setCarrinho, adicionarProduto
    }
} 
