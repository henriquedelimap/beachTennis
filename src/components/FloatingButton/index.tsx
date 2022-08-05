import { Fab, Stack, Typography } from '@mui/material'
import {BsWhatsapp} from 'react-icons/bs'
export const FloatingButton = () => {
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