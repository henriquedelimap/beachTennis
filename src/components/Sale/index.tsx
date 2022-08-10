import styled from "@emotion/styled"
import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import { LogoQuicksand } from "../../assets/img/logoQuicksand"
import { MdBeachAccess, MdShop, MdShop2, MdShoppingCart, MdShopTwo } from "react-icons/md"
import { semFundo1, semFundo2, semFundo3, Vector } from "../../assets/img"
import { Btn } from "../Button"
import { LazyLoad } from "../../components/Animation"

export const promocoes = [
    {
        img: semFundo1,
        colorRadial: 'radial-gradient(#ffffff, #ffffff, #FFFAD2, #FFEA38, #FFEA38, #FFEA38)',
        color: '#FFEA38'
    },

    {
        img: semFundo2,
        colorRadial: 'radial-gradient( #ffffff, #ffffff, #D3CFBE, #948753, #948753, #948753)',
        color: '#948753'
    },
    {
        img: semFundo3,
        colorRadial: 'radial-gradient( #ffffff, #ffffff, #FFCDC3, #FE2B05, #FE2B05, #FE2B05)',
        color: '#FE2B05'

    },
]

export const Sale = () => {


    return (

        <Grid container rowSpacing={4} justifyContent='center' alignContent='center' sx={{ width: '100%', position: 'relative' }} >
            <LogoQuicksand />
            {
                promocoes.map((item, index) => (

                    <Grid key={index} sx={{ width: '100%' }} alignItems='center' justifyContent='center' item xs={4} md={4} lg={4}>

                        <Stack alignItems='center' justifyContent='center' sx={{ position: 'relative', width: { lg: '100%', md: '100%', xs: '100%' } }}>

                            <LazyLoad once>
                            <img src={item.img} style={{ zIndex: 30, height: 320, position: 'relative' }} />
                            <Fundo style={{ background: item.colorRadial }} />
                            </LazyLoad>
                            <Btn position={'absolute'} top={-64} size={20} text={'30% off'} color={item.color} />
                        </Stack>
                    </Grid >
                ))
            }
        </Grid>
    )
}

export const Fundo = styled('div')(({ right }: { right?: string | number }) => ({
    position: 'absolute',
    top: '-8%',
    left: '50%',
    right: right,
    width: '50%',
    height: '60%',
    borderRadius: '150rem',
    transform: 'translateX(-50%)',
    zIndex: 1
}))

const Borda = styled('div')(({ }) => ({
    width: '100%',
    height: '100%',
    border: '2px solid #111111',
    borderRadius: 6,
    position: 'absolute',
    zIndex: 1,
    top: -2,
    left: 2
}))
const Borda2 = styled('div')(({ }) => ({
    width: '100%',
    height: '100%',
    border: '2px solid #111111',
    borderRadius: 6,
    position: 'absolute',
    zIndex: 1,
    top: 2,
    left: -2
}))