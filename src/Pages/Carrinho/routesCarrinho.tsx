import { DefaultLayout } from "../DefaultLayout"
import { Route, Routes } from "react-router-dom"
import { Stack } from "@mui/material"
import { CarrinhoPage } from "."
import { RaquetePage } from "../Raquetes/Raquete"

export const RotasCarrinho = ( ) => {
    return (
        <Routes>
            <Route path='*' element={<DefaultLayout disappear noBanner cart={false} buttonBack={true} />} >
              <Route index element={<CarrinhoPage />} />                  
            </Route>
        </Routes>
    )
}