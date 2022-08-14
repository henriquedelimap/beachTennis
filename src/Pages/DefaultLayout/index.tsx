import { Banner } from '../../components/Banner'
import { Header } from '../../components/AppBar'
import { FloatingButton } from '../../components/FloatingButton'
import { Beneficios } from '../../components/Beneficio'
import { Data } from '../../assets/data'
import { CardRaquetes } from '../../components/Cards'
import { Box, Grid, Paper, Stack } from '@mui/material'

import { Outlet } from 'react-router-dom'
import { OOLogo } from '../../OOTECHNOLOGY'
import { Overflow, Sticky } from '../../styles'

export const DefaultLayout = (
    {
        noBanner,
        buttonBack,
        disappear,
        cart
    }: {
        noBanner?: boolean
        buttonBack?: boolean,
        disappear?: boolean,
        cart?: boolean
    }) => {
    return (
        <Box sx={{ position: 'relative'}}  >
            <Stack sx={{height: 38, bgcolor: '#ffffff'}} />
            <Paper elevation={12} sx={{ position: 'relative', zIndex: '1', borderRadius: '0' }}>
                <FloatingButton disappear={disappear} />
                <Header buttonBack={buttonBack} cart={cart} />
                {noBanner ? '' : <Banner />}
                <Box sx={{ background: 'white', borderRadius: '0', p:{xs: 1, md: 4, lg: 4 } }} >
                    <Outlet />
                </Box>
            </Paper >

            <Sticky bottom={0} index={-10}>
                <Stack justifyContent='center' alignItems='center' sx={{ height: '40vh', width: '100%' }}>
                    <OOLogo />
                </Stack>
            </Sticky>

        </Box>

    )
}
