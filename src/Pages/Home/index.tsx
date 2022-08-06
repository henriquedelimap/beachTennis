import styled from "@emotion/styled"
import { Typography, Container, Box, Divider, Stack, Button } from "@mui/material"
import { Title, TitleCentred } from "../../components/Title"
import { Sale, Fundo } from "../../components/Sale"
import { Beneficios } from "../../components/Beneficio"
import { ContainerPadding } from "../../components/Container"
import { fundoCarbono, fundoCarbono2, fundoCarbono3, logoHeros, X, Vector, Vector2 } from "../../assets/img"
import { motion, useScroll } from 'framer-motion'
import { useRef } from "react"
import { LogoQuicksand } from "../../assets/img/logoQuicksand"
export const Home = () => {
    const { scrollYProgress } = useScroll()
    console.log(scrollYProgress);

    return (
        <>
            <Vector top={-400} rotate={-45} left={-250} color={'#D73F33'} />

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
                    <img src={logoHeros} style={{zIndex: 100, width: '100%' }} />
                    <Button sx={{zIndex: 100}}>
                        tecnologia de ponta
                    </Button>
                </Stack>
                <Vector2 index={2} top={-10} left={'-10%'} rotate={-90} color={'#0066cc'} />
                <Vector2 index={2} top={55} left={'-14%'} rotate={-90} color={'#ffffff'} />
                <Vector2 index={2} top={125} left={'-18%'} rotate={-90} color={'#D73F33'} />
                <Vector2 index={2} top={190} left={'-22%'} rotate={-90} color={'#0066cc'} />

                <Vector2 index={1} top={-55} left={'-5%'} rotate={-90} color={'#0066cc'} />
                <Vector2 index={1} top={-125} left={'0%'} rotate={-90} color={'#0066cc'} />
                <Vector2 index={1} top={-190} left={'5%'} rotate={-90} color={'#0066cc'} />

                <Vector2 index={2} top={-10} right={'-10%'} rotate={-90} color={'#D73F33'} />
                <Vector2 index={2} top={55} right={'-14%'} rotate={-90} color={'#ffffff'} />
                <Vector2 index={2} top={125} right={'-18%'} rotate={-90} color={'#0066cc'} />
                <Vector2 index={2} top={190} right={'-22%'} rotate={-90} color={'#D73F33'} />

                <Vector2 index={1} top={-55} right={'-5%'} rotate={90} color={'#D73F33'} />
                <Vector2 index={1} top={-125} right={'0%'} rotate={90} color={'#D73F33'} />
                <Vector2 index={1} top={-190} right={'5%'} rotate={90} color={'#D73F33'} />
            </Stack>
            <Stack sx={{ height: 1000 }}>

            </Stack>
        </>
    )
}


