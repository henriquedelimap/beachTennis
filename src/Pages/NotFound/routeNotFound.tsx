import { DefaultLayout } from "../DefaultLayout"
import { Route, Routes } from "react-router-dom"
import { Stack } from "@mui/material"
import { NotfFound } from "."

export const NotFoundRoute = ( ) => {
    return ( 
        <Routes>
            <Route path='*' element={<DefaultLayout disappear noBanner buttonBack={true} />}>
                <Route path='*' element={<NotfFound />} />
            </Route>
        </Routes>
    
    )
}