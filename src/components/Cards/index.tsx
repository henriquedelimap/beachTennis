import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Stack, Typography } from "@mui/material"
import { BsHeart } from "react-icons/bs"


import { useContext, useEffect, useState } from "react"

import { Overflow } from "../../styles"
import { FormatPrice } from "../../Utils"
import { IRaquete } from "../../Types"
import { CarrinhoContextType, useCarrinhoContext } from "../../Common/Context/Carinho"
import { FormatedCard } from "./FormatCard"

export interface Prop {
    raquete: IRaquete
    animated?: boolean
    navigation?: boolean
    cardFormat: string
}

interface Formated{
    imgMaxHeight: string
    cardMaxHeight: string
}

export const CardRaquetes = (prop: Prop) => {
    const { raquete, animated, navigation, cardFormat } = prop
    const [formated, setFormated] = useState<Formated>({
        imgMaxHeight: '',
        cardMaxHeight: ''
    })
    useEffect(()=>{
        switch (cardFormat) {
            case 'list':
                setFormated({
                    imgMaxHeight: '24vh',
                    cardMaxHeight: '20vh'

                })
                break;    
                default:
                    setFormated({
                    imgMaxHeight: '53vh',
                    cardMaxHeight: '80vh'

                })
                break;
        }
    }, [cardFormat])

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