import styled from "@emotion/styled"
import { Typography, Container, Box, Divider, Stack, Button } from "@mui/material"
import { Title, TitleCentred } from "../../components/Title"
import { Sale, promocoes } from "../../components/Sale"
import { Beneficios } from "../../components/Beneficio"
import { ContainerPadding } from "../../components/Container"
import { logoHeros, fundoCarbono2, fundoCarbono3 } from "../../assets/img"
import { motion, useScroll, Variants } from 'framer-motion'
import { Absolute } from "../../assets/img/logoQuicksand"
import { Fundo } from '../../styles'
import { AppearEffect } from "../../components/Animation"
export const Home = () => {
    const { scrollYProgress } = useScroll()
    const raquetes = [
        {
            title: '',
            img: promocoes[0].img
        },
        {
            title: '',
            img: promocoes[0].img
        },
        {
            title: '',
            img: promocoes[0].img
        },
        {
            title: '',
            img: promocoes[0].img
        },
        {
            title: '',
            img: promocoes[0].img
        },
        {
            title: '',
            img: promocoes[0].img
        },
        {
            title: '',
            img: promocoes[0].img
        }
    ]

   
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

            <Stack sx={{ overflow: 'hidden', position: 'relative', background: '#111217' }} direction='row' justifyContent='center' alignItems='center'>
                <Stack sx={{ width: '32%', height: '16rem', }} justifyContent='space-evenly'>
                    <img src={logoHeros} style={{ zIndex: 100 }} />
                    <Button sx={{ zIndex: 100 }}>
                        tecnologia de ponta
                    </Button>
                </Stack>

                {
                    raquetes.map((raquete, index) => {
                        return (

                            <Fundo top={25} right={index * 32}  >
                                <AppearEffect isImg img={raquete.img} />
                            </Fundo>
                        )
                    })
                }


            </Stack>
            <Stack sx={{ height: 1000 }}>

            </Stack>
        </>
    )
}

