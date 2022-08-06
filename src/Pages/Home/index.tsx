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
                <Vector2 index={2} top={10} left={'0%'} rotate={0} color={'white'} />
                <Vector2 index={3} top={50} left={'0%'} rotate={0} color={'#D73F33'} />
                <Vector2 index={2} top={90} left={'0%'} rotate={0} color={'green'} />

                <Vector2 index={1} top={-125} left={'-38%'} rotate={90} color={'#0066cc'} />
                <Vector2 index={2} top={-120} left={'-34%'} rotate={90} color={'#0066cc'} />

                <Vector2 index={3} top={-125} left={'-30%'} rotate={90} color={'#0066cc'} />
                <Vector2 index={2} top={-200} left={'-26%'} rotate={90} color={'#0066cc'} />
                <Vector2 index={1} top={-225} left={'16%'} rotate={-90} color={'#0066cc'} />
                <Vector2 index={1} top={-250} left={'20%'} rotate={-90} color={'#0066cc'} />
                <Vector2 index={1} top={-275} left={'24%'} rotate={-90} color={'#0066cc'} />
                <Vector2 index={1} top={-300} left={'28%'} rotate={-90} color={'#0066cc'} />
                <Vector2 index={1} top={-300} left={'28%'} rotate={-90} color={'#0066cc'} />
                <Vector2 index={1} top={-225} left={'48%'} rotate={-90} color={'#0066cc'} />
                <Vector2 index={1} top={-200} left={'44%'} rotate={-90} color={'#0066cc'} />
                <Vector2 index={1} top={-175} left={'40%'} rotate={-90} color={'#0066cc'} />
                <Vector2 index={1} top={-150} left={'36%'} rotate={-90} color={'#0066cc'} />
                <Vector2 index={1} top={-125} left={'32%'} rotate={-90} color={'#0066cc'} />
                <Vector2 index={1} top={-250} left={'52%'} rotate={-90} color={'#0066cc'} />
                <Vector2 index={1} top={-275} left={'58%'} rotate={-90} color={'#0066cc'} />

                
            </Stack>
            <Stack sx={{ height: 1000 }}>

            </Stack>
        </>
    )
}


