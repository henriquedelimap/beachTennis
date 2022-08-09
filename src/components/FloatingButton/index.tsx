import { Collapse, Fab, Link, Slide, Stack, Typography } from '@mui/material'
import { AppearEffect } from '../Animation'
import { BsWhatsapp } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
interface Prop {
    disappear?: boolean
}
export const FloatingButton = (prop: Prop) => {
    const { disappear } = prop
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
                    bottom:   8,
                    right:   16,
                }}
                href={link}
                >

                <Stack direction='row' spacing={disappear ? 0 : 1} alignItems='center'>

                    <BsWhatsapp fontSize={20} />

                    <Collapse in={!disappear} orientation='horizontal'>
                        <Typography variant={'body1'}>
                            entrar em contato
                        </Typography>
                    </Collapse>

                </Stack>
            </Fab>
    )
}