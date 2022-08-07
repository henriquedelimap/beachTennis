import { Stack } from '@mui/material'
import logo from '../../assets/img/logoUberlandiaTennis.png'

export const Logo = () => {
    return( 
        <Stack alignItems='center' sx={{ p: 2, width:'100%', height:'100%'}} justifyContent='center'>

            <img src={logo} alt='logo' style={{width: 126, alignSelf: 'center', justifySelf: 'center'}} />
        </Stack>
    )
}