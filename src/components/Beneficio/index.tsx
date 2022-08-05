import { Box, Grid, Stack, Typography } from "@mui/material"
import { GiTennisRacket, GiSportMedal, GiPalmTree } from 'react-icons/gi'
import { CgTennis } from 'react-icons/cg'
export const Beneficios = () => {
    const itens = [
        {
            icone: <GiTennisRacket fontSize={128} />,
            title: `Lorem ipsum dolor sit amet `,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet maxime minima earum ratione vero eius saepe a, dignissimos consectetur ipsa sed aut dolorem repellat omnis perspiciatis, rem unde facere similique.`
        },
        {
            icone: <GiSportMedal fontSize={128} />,
            title: `Lorem ipsum dolor sit amet `,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet maxime minima earum ratione vero eius saepe a, dignissimos consectetur ipsa sed aut dolorem repellat omnis perspiciatis, rem unde facere similique.`
        },
        {
            icone: <GiPalmTree fontSize={128} />,
            title: `Lorem ipsum dolor sit amet `,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet maxime minima earum ratione vero eius saepe a, dignissimos consectetur ipsa sed aut dolorem repellat omnis perspiciatis, rem unde facere similique.`
        },
        {
            icone: <CgTennis fontSize={128} />,
            title: `Lorem ipsum dolor sit amet `,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet maxime minima earum ratione vero eius saepe a, dignissimos consectetur ipsa sed aut dolorem repellat omnis perspiciatis, rem unde facere similique.`
        },
    ]
    return (
        <Box>
            <Grid container spacing={4} >
                {
                    itens.map(item => (

                        <Grid item xs={12} md={6} lg={6} >

                            <Stack spacing={2} alignItems='flex-start' direction='row' sx={{ p: 2}}>

                            {item.icone}
                            <Stack spacing={1}>
                                <Typography variant='h5'>{item.title}</Typography>
                                <Typography paragraph>{item.description}</Typography>
                            </Stack>

                            </Stack>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}