import { Avatar, Box, Grid, Stack, Typography } from "@mui/material"
import { GiTennisRacket, GiSportMedal, GiPalmTree } from 'react-icons/gi'
import { CgTennis } from 'react-icons/cg'
import { X, logoQuickSand } from "../../assets/img"
import { Fundo } from "../../styles"
import { Key } from "react"
import { ResponsiveStyleValue } from "@mui/system"
export const Beneficios = () => {
    const itens = [
        {
            icone: <GiTennisRacket fontSize={128} />,
            title: `Lorem ipsum dolor sit amet `,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet maxime minima earum ratione vero eius saepe a, dignissimos consectetur ipsa sed aut dolorem repellat omnis perspiciatis, rem unde facere similique.`,
            brand: logoQuickSand
        },
        {
            icone: <GiSportMedal fontSize={128} />,
            title: `Lorem ipsum dolor sit amet `,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet maxime minima earum ratione vero eius saepe a, dignissimos consectetur ipsa sed aut dolorem repellat omnis perspiciatis, rem unde facere similique.`,
            brand: X
        },
        {
            icone: <CgTennis fontSize={128} />,
            title: `Lorem ipsum dolor sit amet `,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet maxime minima earum ratione vero eius saepe a, dignissimos consectetur ipsa sed aut dolorem repellat omnis perspiciatis, rem unde facere similique.`,
            brand: logoQuickSand
        },
        {
            icone: <GiPalmTree fontSize={128} />,
            title: `Lorem ipsum dolor sit amet `,
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet maxime minima earum ratione vero eius saepe a, dignissimos consectetur ipsa sed aut dolorem repellat omnis perspiciatis, rem unde facere similique.`,
            brand: X
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
}
    const Item = (prop: Prop) => {
        const {item, index, direction} = prop
        return (
            <Grid key={index} item xs={12} md={6} lg={6} >
            <Stack direction={direction} spacing={2} alignItems='center' sx={{ p: 2, position: 'relative' }}>
                <Avatar variant='square' src={item.brand} />
                <Stack spacing={1}>
                    <Typography variant='h5'>{item.title}</Typography>
                    <Typography paragraph>{item.description}</Typography>
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
                        if (item.brand === X) {
                            return <Item item={item} index={index} direction='row-reverse' />
                        } else {
                            return <Item item={item} index={index} direction='row' />
                        }
                })
                }
            </Grid>
        </Box>
    )
}