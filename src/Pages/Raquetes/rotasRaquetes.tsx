import { DefaultLayout } from "../DefaultLayout"
import { Route, Routes } from "react-router-dom"
import { RaquetePage } from "./Raquete"
import { IconButton, Stack } from "@mui/material"
import { MdArrowBack } from "react-icons/md"
import { ContainerPadding } from "../../components/Container"

export const RotasRaquetes = ( ) => {
    return ( 
        <Routes>
            <Route path='*' element={<DefaultLayout noBanner buttonBack />}>
                <Route index element={
                    <>
                        <Stack sx={{height: 56, width: '100%'}} />
                        
                        <ContainerPadding>

                            <Stack alignItems='center' spacing={2} sx={{width: '100%'}}>

                            <RaquetePage />
                            </Stack>
                        </ContainerPadding>
                    
                    </>
                } />
            </Route>
        </Routes>
    )
}