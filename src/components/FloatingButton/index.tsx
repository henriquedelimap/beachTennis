import { Fab, Link, Stack, Typography } from '@mui/material'
import {BsWhatsapp} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
interface Prop {
    disappear?: boolean
}
export const FloatingButton = (prop: Prop) => {
    const {disappear} = prop
    const navigate = useNavigate()
    const text = 'Oi, Wal. Tudo bem? Gostaria de encontrar a raquete ideal pro meu tipo de jogo'
    const link = `https://wa.me/5534998664444?text=${text}` 
    return (
        <Fab
            variant='extended'
            size='medium'
            color='primary'
            sx={{
                position: 'fixed',
                bottom: 8,
                right: 8.,
                display: disappear ? 'none' : 'flex'
            }}
            href={link}
        >

            <Stack direction='row' spacing={1} alignItems='center'>
                
                <BsWhatsapp fontSize={20} />
                <Typography variant={'body1'}>
                    entrar em contato
                </Typography>
                
            </Stack>
        </Fab>
    )
}