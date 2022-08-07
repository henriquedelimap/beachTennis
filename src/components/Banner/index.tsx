import { Box, Paper, Stack, Typography } from "@mui/material"
import { Btn } from "../../components/Button"
import Carousel from 'react-material-ui-carousel'
import { Fundo } from "../../styles"
import { banner1, banner2, banner3, banner4 } from "../../assets/img"

export const Banner = () => {
    const images = [banner1, banner2, banner3, banner4]
    return (
        <Box>
            <Paper elevation={0}>
                <Carousel
                    navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
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
    )
}

interface Prop{

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
    const {logo, raquetes, description, btnText} = prop
    return (
        <Stack sx={{ overflow: 'hidden', position: 'relative', background: '#111217' }} direction='row' justifyContent='center' alignItems='center'>
            <Stack spacing={2} sx={{ width: { lg: '32%', md: '64%', xs: '100%' }, height: '16rem', background: '#1f1f1faf', backdropFilter: 'blur(4px)', zIndex: 90 }} alignItems='center' justifyContent='center'>
                <img src={logo} style={{ zIndex: 100, width: '12rem' }} />
                <Typography sx={{ p: 4, pt: 0, pb: 4, textAlign: 'center' }} color='white' paragraph>
                    {description}
                    
                </Typography>
                <Btn size={'h6'} color={'#f1f1f11f'} text={btnText} />
            </Stack>
            <Stack width='100%' height='100%' sx={{ position: 'absolute' }}>


                {
                    raquetes?.map((raquete, index) => {
                        return (

                            // <AppearEffect key={index} index={raquete.index} x={'50%'} xA={raquete.xA} y={0} yA={0} isImg={false} />

                            <Fundo key={index} right={raquete.xA} >
                                <img src={raquete.img} style={{ height: '16rem', zIndex: index }} />
                            </Fundo>
                        )
                    })
                }
            </Stack>


        </Stack>
    )
}