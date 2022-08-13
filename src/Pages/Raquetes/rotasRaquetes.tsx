import { DefaultLayout } from "../DefaultLayout"
import { Route, Routes } from "react-router-dom"
import { RaquetePage } from "./Raquete"
import { IconButton, Stack } from "@mui/material"
import { MdArrowBack } from "react-icons/md"
import { ContainerPadding } from "../../components/Container"

export const RotasRaquetes = () => {
    return (
        <Routes>
            <Route path='*' element={<DefaultLayout disappear noBanner buttonBack={true} cart={true} />}>
                <Route index element={
                    <>
                        <Stack sx={{ height: 20, width: '100%' }} />
                        <RaquetePage />
                    </>
                } />
            </Route>
        </Routes>
    )
}