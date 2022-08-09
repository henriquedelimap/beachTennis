import { Banner } from '../../components/Banner'
import { Header } from '../../components/AppBar'
import { FloatingButton } from '../../components/FloatingButton'
import { Beneficios } from '../../components/Beneficio'
import { Data } from '../../assets/data'
import { CardRaquetes } from '../../components/Cards'
import { Box, Grid } from '@mui/material'

import {Outlet} from 'react-router-dom'
import { OOLogo } from '../../OOTECHNOLOGY'
import { Overflow } from '../../styles'

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
        <>
            <FloatingButton disappear={disappear} />
            <Header buttonBack={buttonBack} />
            {noBanner ? '' : <Banner />}
            <Box minHeight={'40vh'}>
                <Outlet />
            </Box>
            <OOLogo />
        </>

    )
}
