import { Box, Paper, Stack, Typography } from "@mui/material"
import { Btn } from "../../components/Button"
import Carousel from 'react-material-ui-carousel'
import { Fundo } from "../../styles"
import { banner1, banner2, banner3, banner4 } from "../../assets/img"

import { AppearEffect } from '../Animation'
import { HideOnScroll } from "../AppBar"
export const Banner = () => {
    const images = [banner1, banner2, banner3, banner4]
    return (
        <HideOnScroll>
            <Box>
                <Paper elevation={0}>
                    <Carousel
                        navButtonsProps={{
                            style: {
                                display: 'none',
                                backgroundColor: 'transparent',
                                borderRadius: 0
                            }
                        }}
                        navButtonsWrapperProps={{
                            style: {
                                display: 'none',

                                bottom: '0',
                                top: 'unset',
                                boxShadow: 'none'
                            }
                        }}
                        indicatorIconButtonProps={{
                            style: {
                                display: 'none',
                                padding: '0',
                                color: 'transparent'
                            }
                        }}
                    >
                        {
                            images.map((image, index) => (
                                <Stack key={index} alignItems='center'  >
                                    <img style={{ maxWidth: '100%', minWidth: '64rem', minHeight: '25rem' }} src={image} />
                                </Stack>
                            ))
                        }
                    </Carousel>
                </Paper>
            </Box>
        </HideOnScroll>
    )
}

interface Prop {

    logo?: any
    description: string
    btnText: string
    raquetes?: {
        title: string;
        img: any;
        xA: string;
        index: number;
    }[]

}

export const BannerGlass = (prop: Prop) => {
    const { logo, raquetes, description, btnText } = prop
    return (
        <Stack sx={{ overflow: 'hidden', boxShadow: 'inset 0px 0px 32px -6px #ffffff60', position: 'relative', background: '#111217' }} direction='row' justifyContent='center' alignItems='center'>
            <Stack
                spacing={2}
                sx={{
                    width: {
                        lg: '32%',
                        md: '64%',
                        xs: '100%'
                    },
                    position: 'relative',
                    height: '16rem',
                    background: '#1f1f1faf',
                    boxShadow: '0px 0px 320px -40px #ffffff60',
                    backdropFilter: 'blur(4px)',
                    zIndex: 90
                }}
                alignItems='center'
                justifyContent='center'
            >
                <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    boxShadow: 'inset 0px 0px 32px -12px #ffffff60',
                    height: '16rem',
                    zIndex: 10
                }} />
                <img
                    src={logo}
                    style={{
                        zIndex: 100,
                        width: '12rem'
                    }} />
                <Typography
                    sx={{
                        p: 4,
                        pt: 0,
                        pb: 4,
                        textAlign: 'center',
                        zIndex: 100

                    }}
                    color='white'
                    paragraph>
                    {description}

                </Typography>

                <Btn
                    size={18}
                    color={'#f1f1f11f'}
                    text={btnText} />
            </Stack>
            <Stack
                width='100%'
                height='100%'
                sx={{
                    position: 'absolute'
                }}>

            </Stack>


        </Stack>
    )
}