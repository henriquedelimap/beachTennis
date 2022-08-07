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
import { Btn } from "../../components/Button"
import { BannerGlass } from "../../components/Banner"
export const Home = () => {
    const { scrollYProgress } = useScroll()
    const raquetes = [
       
        {
            title: '',
            img: promocoes[0].img,
            xA: '0%',
            index: 1500
        },
        {
            title: '',
            img: promocoes[0].img,
            xA: '15%',
            index: 4
        },
        {
            title: '',
            img: promocoes[0].img,
            xA: '30%',
            index: 3
        },
        {
            title: '',
            img: promocoes[0].img,
            xA: '45%',
            index: 2
        },
        {
            title: '',
            img: promocoes[0].img,
            xA: '61.6%',
            index: 4
        },
        {
            title: '',
            img: promocoes[0].img,
            xA: '76.6%',
            index: 3
        },
        {
            title: '',
            img: promocoes[0].img,
            xA: '91.6%',
            index: 2
        },
      
        
        
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

            <BannerGlass 
                raquetes={raquetes} 
                logo={logoHeros}
                btnText={'tecnologia de ponta'}
                description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aut magnam sed velit rerum odio necessitatibus hic numquam molestias dicta.'}
            />
            <Stack sx={{ height: 1000 }}>

            </Stack>
        </>
    )
}

