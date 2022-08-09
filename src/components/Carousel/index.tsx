import { Paper, Stack } from "@mui/material"
import Carousel from 'react-material-ui-carousel'

interface Prop {
    images: any[]
}

export const CreateCarousel = (prop: Prop) => {
    const { images } = prop
    return (
        <Carousel
            sx={{
                minWidth: '22rem'
            }}
            navButtonsProps={{
                style: {
                    backgroundColor: '#0066cc',
                    borderRadius: 16
                }
            }}
            navButtonsWrapperProps={{
                style: {

                    bottom: '0',
                    top: 'unset',
                    boxShadow: 'none'
                }
            }}
            indicatorIconButtonProps={{
                style: {
                    padding: '0',
                    color: '#0066cc'
                }
            }}
        >
            {
                images.map((image, index) => (
                    <Stack
                        key={index}
                        alignItems='center'
                    >
                        <img
                            style={{
                                minWidth: 'auto',
                                height: '52vh'
                            }}
                            src={image}
                        />
                    </Stack>
                ))
            }
        </Carousel>
    )
}