import styled from "@emotion/styled"
import { Typography, Container, Box, Divider, Stack } from "@mui/material"
import { Title, TitleCentred } from "../../components/Title"
import { Sale } from "../../components/Sale"
import { Beneficios } from "../../components/Beneficio"
import { ContainerPadding } from "../../components/Container"

export const Home = () => {
    return (
        <>

            <ContainerPadding>
                <Title text='promoção' />
                <Sale />
            </ContainerPadding>
            <Box sx={{ background: '#F1FCFF' }}>
                <ContainerPadding>
                    <TitleCentred text='experimente o novo' />
                    <Beneficios />
                </ContainerPadding>
            </Box>
        </>
    )
}


