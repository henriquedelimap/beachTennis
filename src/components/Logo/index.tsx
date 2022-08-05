import { Stack } from '@mui/material'
import logo from '../../assets/img/logoUberlandiaTennis.png'

export const Logo = () => {
    return( 
        <Stack alignItems='baseline' sx={{ p: 1, width:'100%', height:'100%'}} justifyContent='baseline'>

            <img src={logo} alt='logo' style={{width: 126, alignSelf: 'baseline', justifySelf: 'baseline'}} />
        </Stack>
    )
}