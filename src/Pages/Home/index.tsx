import styled from "@emotion/styled"
import { Typography, Container, Box, Divider, Stack, Button } from "@mui/material"
import { Title, TitleCentred } from "../../components/Title"
import { Sale, Fundo } from "../../components/Sale"
import { Beneficios } from "../../components/Beneficio"
import { ContainerPadding } from "../../components/Container"
import {  fundoCarbono, fundoCarbono2, fundoCarbono3, logoHeros, X } from "../../assets/img"
import {motion, useScroll} from 'framer-motion'
import { useRef } from "react"
import { LogoQuicksand } from "../../assets/img/logoQuicksand"
export const Home = () => {
    const {scrollYProgress} = useScroll()
    console.log(scrollYProgress);
    
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

            <Stack sx={{overflow: 'hidden', position: 'relative', background: '#111217'}} direction='row'justifyContent='center' alignItems='center'>
                <motion.img  src={fundoCarbono2} style={{scaleX: scrollYProgress, width: '100%', opacity: .4, boxShadow: '4px 0px 8px 8px #1111114a', height: 'auto', transformOrigin: 'left'}} />
                <Stack sx={{width: '32%', height: '16rem',}} justifyContent='space-evenly'>
                      <img src={logoHeros} style={{width: '100%'}} />
                    <Button>
                        tecnologia de ponta
                    </Button>
                </Stack>
                <motion.img   src={fundoCarbono3} style={{scaleX: scrollYProgress ,width: '100%', opacity: .4, boxShadow: '-4px 0px 8px 8px #1111114a', height: 'auto', transformOrigin: 'right'}} />
            </Stack>
        </>
    )
}


