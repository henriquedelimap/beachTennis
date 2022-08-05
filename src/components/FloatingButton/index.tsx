import { Fab, Link, Stack, Typography } from '@mui/material'
import {BsWhatsapp} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
export const FloatingButton = () => {
    const navigate = useNavigate()
    return (
        <Fab
            variant='extended'
            size='medium'
            color='primary'
            style={{
                position: 'fixed',
                bottom: 16,
                right: 16
            }}
            href='https://wa.me/message/HX63ODKP56H5L1'
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