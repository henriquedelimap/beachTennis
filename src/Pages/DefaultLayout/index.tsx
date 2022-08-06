import { Banner } from '../../components/Banner'
import { Header } from '../../components/AppBar'
import { FloatingButton } from '../../components/FloatingButton'
import { Beneficios } from '../../components/Beneficio'
import { Data } from '../../assets/data'
import { CardRaquetes } from '../../components/Cards'
import { Box, Grid } from '@mui/material'

import {Outlet} from 'react-router-dom'
import { OOLogo } from '../../OOTECHNOLOGY'

export const DefaultLayout = () => {
    return (
        <div style={{overflow: 'hidden'}}>
            <FloatingButton />
            <Header />
            <Banner />
            <Box minHeight={'40vh'}>
                <Outlet />
            </Box>
            <OOLogo />
        </div>

    )
}
