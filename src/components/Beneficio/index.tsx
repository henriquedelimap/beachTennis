import { Avatar, Box, Grid, Stack, Typography } from "@mui/material"
import { GiTennisRacket, GiSportMedal, GiPalmTree } from 'react-icons/gi'
import { CgTennis } from 'react-icons/cg'
import { X, logoQuickSand, logoTurquoise, logoOceanAir } from "../../assets/img"
import { Fundo } from "../../styles"
import { Key } from "react"
import { ResponsiveStyleValue } from "@mui/system"
export const Beneficios = () => {
    const itens = [
        {
            icone: <GiTennisRacket fontSize={128} />,
            title: `Quicksand `,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet maxime minima earum ratione vero eius saepe a, dignissimos consectetur ipsa sed aut dolorem repellat omnis perspiciatis, rem unde facere similique.`,
            brand: logoQuickSand,
            id: 1
        },
        {
            icone: <GiSportMedal fontSize={128} />,
            title: `Hero's `,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet maxime minima earum ratione vero eius saepe a, dignissimos consectetur ipsa sed aut dolorem repellat omnis perspiciatis, rem unde facere similique.`,
            brand: X,
            id: 2
        },
        {
            icone: <CgTennis fontSize={128} />,
            title: `Turquoise`,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet maxime minima earum ratione vero eius saepe a, dignissimos consectetur ipsa sed aut dolorem repellat omnis perspiciatis, rem unde facere similique.`,
            brand: logoTurquoise,
            id: 3
        },
        {
            icone: <GiPalmTree fontSize={128} />,
            title: `Ocean Air`,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet maxime minima earum ratione vero eius saepe a, dignissimos consectetur ipsa sed aut dolorem repellat omnis perspiciatis, rem unde facere similique.`,
            brand: logoOceanAir,
            id: 4
        },
    ]

    interface Prop {
        item: {
            icone: JSX.Element;
            title: string;
            description: string;
            brand: any;
        }
        index: number
        direction: ResponsiveStyleValue<any>
        right?: boolean
    }
    const Item = (prop: Prop) => {
        const { item, index, direction, right } = prop
        const align = right ? 'right' : 'left'
        return (
            <Grid key={index} item xs={12} md={6} lg={6} >
                <Stack direction={direction} spacing={2} alignItems='center' sx={{ p: 2, position: 'relative' }}>
                    <Avatar
                        variant='square'
                        src={item.brand}
                        sx={{
                            width: 132, 
                            '& img': {
                                width: 124,
                                objectFit: 'fill',
                                filter: 'invert(100%) brightness(60%)',
                            },
                        }} />
                    <Stack spacing={1}>
                        <Typography align={align} variant='h5' fontWeight='100'>{item.title}</Typography>
                        <Typography align={align} variant='body2' paragraph fontWeight='500' >{item.description}</Typography>
                    </Stack>

                </Stack>
            </Grid>
        )
    }
    return (
        <Box>
            <Grid container spacing={{ md: 4, sx: 0, lg: 4 }} rowSpacing={2} >
                {
                    itens.map((item, index) => {
                        if (item.id % 2 === 0) {
                            return <Item item={item} index={index} direction='row-reverse' />
                        } else {
                            return <Item item={item} index={index} direction='row' right />
                        }
                    })
                }
            </Grid>
        </Box>
    )
}