import { Collapse, Fab, Fade, Link, Slide, Stack, Typography, useScrollTrigger } from '@mui/material'
import { AppearEffect } from '../Animation'
import { BsWhatsapp } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

interface Prop {
    disappear?: boolean
}
export const FloatingButton = (prop: Prop) => {
    const { disappear } = prop

    const trigger = useScrollTrigger({
        target: window ? window : undefined,
        disableHysteresis: true,
        threshold: 100,
      });

    const navigate = useNavigate()
    const text = 'Oi, Wal. Tudo bem? Gostaria de encontrar a raquete ideal pro meu tipo de jogo'
    const link = `https://wa.me/5534998664444?text=${text}`
    return (
        <Fade in={trigger}>

            <Fab
                variant='extended'
                size='medium'
                color='primary'
                sx={{
                    position: 'fixed',
                    bottom: 8,
                    right: 16,
                }}
                href={link}
            >

                <Stack direction='row' spacing={disappear ? 0 : { xs: 0, md: 1, lg: 1 }} alignItems='center'>

                    <BsWhatsapp fontSize={20} />

                    <Collapse in={!disappear} orientation='horizontal'>
                        <Typography sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }} variant={'body1'}>
                            entrar em contato
                        </Typography>
                    </Collapse>

                </Stack>
            </Fab>
        </Fade>
    )
}