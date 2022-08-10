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
        disappear
    }: {
        noBanner?: boolean
        buttonBack?: boolean,
        disappear?: boolean
    }) => {
    return (
        <Box  >

            <Paper elevation={12} sx={{ position: 'relative', zIndex: '100' }}>
                <FloatingButton disappear={disappear} />
                <Header buttonBack={buttonBack} />
                {noBanner ? '' : <Banner />}
                <Paper elevation={24} sx={{minHeight:'40vh', pb: 8}} >
                    <Outlet />
                </Paper>

                <Sticky bottom={0} index={-1}>
                    <Stack justifyContent='center' alignItems='center' sx={{ height: '16vh', width: '100%' }}>
                        <OOLogo />
                    </Stack>
                </Sticky>
            </Paper >

        </Box>

    )
}
