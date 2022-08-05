import styled from "@emotion/styled"
import { Box, Button, Grid, Stack } from "@mui/material"
import { MdBeachAccess, MdShop, MdShop2, MdShoppingCart, MdShopTwo } from "react-icons/md"
import { semFundo1, semFundo2, semFundo3 } from "../../assets/img"


export const Sale = () => {

    const promocoes = [
        {
            img: semFundo1,
            colorRadial: 'radial-gradient(#ffffff, #ffffff, #B7EFAD, #61F248, #61F248, #61F248)',
            color: '#61F248'
        },
        
        {
            img: semFundo3,
            colorRadial: 'radial-gradient( #ffffff, #ffffff, #F5B589, #F17F31, #F17F31, #F17F31)',
            color: '#F17F31'
            
        },
        {
            img: semFundo2,
            colorRadial: 'radial-gradient( #ffffff, #ffffff, #F5EB90, #EEDA29, #EEDA29, #EEDA29)',
            color: '#EEDA29'
        },
    ]
    return (
        <Grid container spacing={2} justifyContent='center' alignContent='center' sx={{width: '100%'}} >
            {
                promocoes.map(item => (
                    <Grid sx={{width: '100%'}} alignItems='center' justifyContent='center' item xs={3} md={3} lg={4}>
                        <Stack alignItems='center' justifyContent='center' sx={{ position: 'relative', width: {lg: '100%' , md: '100%', xs: '100%'  }}}>

                            <img src={item.img} style={{ zIndex: 3, height: 320  }} />
                            <Fundo style={{background: item.colorRadial}} />
                            <Button sx={{position:'absolute', color: '#666666', fontWeight: 'bold', zIndex: 5, background: item.color, bottom: '10%', whiteSpace: 'nowrap', p: 2, pt: .5, pb: .5}}>
                                30% off
                                <Borda />
                                <Borda2 />
                            </Button>
                        </Stack>
                    </Grid >
                ))
            }
        </Grid>
    )
}

const Fundo = styled('div')(({ }) => ({
    position: 'absolute',
    top: '-8%',
    left: '50%',
    right: 0,
    width: '60%',
    height: '60%',
    borderRadius: '150rem',
    transform: 'translateX(-50%)',
    zIndex: -1
}))

const Borda = styled('div')(({})=>({
    width: '100%',
    height: '100%',
    border:'2px solid #666666',
    borderRadius: 4,
    position: 'absolute',
    zIndex: -1,
    top: -2,
    left: 2
}))
const Borda2 = styled('div')(({})=>({
    width: '100%',
    height: '100%',
    border:'2px solid #666666',
    borderRadius: 4,
    position: 'absolute',
    zIndex: -1,
    top: 2,
    left: -2
}))