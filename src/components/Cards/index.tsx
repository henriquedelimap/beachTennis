import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Stack, Typography } from "@mui/material"
import { BsHeart } from "react-icons/bs"


import { useContext, useEffect, useState } from "react"

import { FormatPrice } from "../../Utils"
import { IRaquete } from "../../Types"
import { FormatedCard } from "./FormatCard"

export interface Prop {
    raquete: IRaquete
    animated?: boolean
    navigation?: boolean
    cardFormat: string
}

export const CardRaquetes = (prop: Prop) => {
    const { raquete, animated, navigation, cardFormat } = prop
    return (
        <FormatedCard cardFormat={cardFormat} raquete={raquete} animated={animated} navigation={navigation} />
    )
}


export const PriceSale = (
    {
        original,
        sale
    }: {
        original: number,
        sale: number
    }) => {
    return (
        <>
            <Typography
                sx={{
                    textDecoration: 'line-through',
                    textAlign: 'center'
                }}
                align='center'

                variant='body2'
                color='text.secondary'
            >
                {FormatPrice(original)}
            </Typography>
            <Typography
                sx={{
                    fontWeight: 900,
                    textAlign: 'center'
                }}
                align='center'

                variant='body1'
                color='text.primary'
            >
                {FormatPrice(sale)}
            </Typography>
        </>
    )
}