import { Box, Paper, Stack } from "@mui/material"
import Carousel from 'react-material-ui-carousel'
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
                        images.map(image => (
                            <Stack alignItems='center'  >
                                <img style={{ maxWidth: '100%', minWidth: '64rem', minHeight: '25rem' }} src={image} />
                            </Stack>
                        ))
                    }
                </Carousel>
            </Paper>
        </Box>
    )
}