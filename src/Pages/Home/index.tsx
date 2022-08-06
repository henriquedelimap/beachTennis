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
            xA: '60%',
            index: 4
        },
        {
            title: '',
            img: promocoes[0].img,
            xA: '75%',
            index: 3
        },
        {
            title: '',
            img: promocoes[0].img,
            xA: '90%',
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

            <Stack sx={{ overflow: 'hidden', position: 'relative', background: '#111217' }} direction='row' justifyContent='center' alignItems='center'>
                <Stack spacing={2} sx={{ width: {lg: '32%', md: '64%', xs:'100%'}, height: '16rem', background: '#1f1f1faf', backdropFilter: 'blur(4px)', zIndex: 90 }} alignItems='center' justifyContent='center'>
                    <img src={logoHeros} style={{ zIndex: 100, width:'12rem' }} />
                    <Typography sx={{p:4, pt: 0, pb:0, textAlign:'center'}} color='white' paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aut magnam sed velit rerum odio necessitatibus hic numquam molestias dicta.</Typography>
                    <Button sx={{ zIndex: 100 }}>
                        tecnologia de ponta
                    </Button>
                </Stack>
                <Stack width='100%' height='100%' sx={{position: 'absolute'}}>


                {
                    raquetes.map((raquete, index) => {
                        return (
                            
                            // <AppearEffect key={index} index={raquete.index} x={'50%'} xA={raquete.xA} y={0} yA={0} isImg={false} />
                            
                                <Fundo right={raquete.xA} >
                                    <img src={raquete.img} style={{height: '16rem', zIndex: index}} />
                                </Fundo>
                        )
                    })
                }
                </Stack>


            </Stack>
            <Stack sx={{ height: 1000 }}>

            </Stack>
        </>
    )
}

