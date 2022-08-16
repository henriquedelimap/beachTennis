import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { useSnackbar } from 'notistack'
interface Prop {
  children?: ReactNode
}

export interface GlobalConfigContextType {
  config: {}
  setConfig: Dispatch<SetStateAction<{}>>
}

export const GlobalConfigContext = createContext<GlobalConfigContextType | {}>({
  cardFormat: 'default'
})
GlobalConfigContext.displayName = 'config'


export const configProvider = (prop: Prop) => {
  const [config, setConfig] = useState<{}>()
  return (
    <GlobalConfigContext.Provider value={{ config, setConfig }}>
      {prop.children}
    </GlobalConfigContext.Provider>
  )
}

export const useGlobalContext = () => {
  const { config, setConfig } = useContext(GlobalConfigContext) as GlobalConfigContextType
  const [cardFormated, setCardFormated] = useState<any>({})
  const [cardFormat, setCardFormat] = useState('list')
  
  const configurar = (configuracao: { cardFormat: string }) => {
    setCardFormat(configuracao.cardFormat)
  }
  return {
    config, setConfig, configurar, cardFormat, cardFormated, setCardFormat, setCardFormated
  }
} 
