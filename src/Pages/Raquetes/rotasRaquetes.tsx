import { DefaultLayout } from "../DefaultLayout"
import { Route, Routes } from "react-router-dom"
import { RaquetePage } from "./Raquete"

export const RotasRaquetes = ( ) => {
    return ( 
        <Routes>
            <Route path='*' element={<DefaultLayout noBanner />}>
                <Route index element={
                    <>
                        <RaquetePage />
                    
                    </>
                } />
            </Route>
        </Routes>
    )
}