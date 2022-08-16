import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Stack, SxProps, Theme, Typography } from "@mui/material"
import { BsHeart } from "react-icons/bs"

import { useNavigate } from "react-router-dom"

import { useContext, useEffect, useState } from "react"
import { Overflow } from "../../styles";
import { AppearEffect, LazyLoad } from "../../components/Animation"
import { FormatPrice } from "../../Utils"
import { IRaquete } from "../../Types"
import { useCarrinhoContext } from "../../Common/Context/Carinho"
import { MdAdd, MdAddShoppingCart, MdAdUnits, MdMoreVert, MdRemove } from "react-icons/md"

export interface Prop {
    raquete: IRaquete
    animated?: boolean
    navigation?: boolean
    cardFormat: string
}

export const CardRaquetes = (prop: Prop) => {
    const { adicionarProduto } = useCarrinhoContext()
    const { raquete, animated, navigation, cardFormat } = prop
    const navigate = useNavigate()
    const [cardFormated, setCardFormated] = useState({ card: {}, cardMedia: {} })

    function NavigationValidate(nav: boolean | undefined, to?: number) {
        if (nav === false) {
            return null
        }
        return navigate(`${to}`)
    }
    useEffect(() => {
        switch (cardFormat) {
            case 'list':
                setCardFormated({
                    card: {
                        height: '100%',
                        width: '100%',
                        maxHeight: '32vh',
                        position: 'relative',
                        maxWidth: '28rem',
                        pb: .8
                    },
                    cardMedia: { 
                        display: 'none'
                    }
                })
                break;

            default:
                setCardFormated({
                    card: {
                        height: '100%',
                        width: '100%',
                        maxHeight: '80vh',
                        position: 'relative',
                        maxWidth: '28rem',
                    },
                    cardMedia: { 
                        maxHeight: '53vh', 
                        objectFit: 'contain',
                    }
                })
                break;
        }
    }, [cardFormat])
    return (
        <Card
            elevation={animated ? 0 : 1}
            sx={cardFormated.card}
        >
            <LazyLoad>
                <CardHeader
                    sx={{ cursor: 'pointer', }}
                    avatar={
                        <Avatar
                            variant='square'
                            src={raquete.img[0]}
                            onClick={() => NavigationValidate(navigation, raquete.id)}
                        />
                    }
                    title={raquete.title.toLowerCase()}
                    subheader={raquete.material}
                    action={
                        <IconButton onClick={() => {
                            adicionarProduto(raquete)
                        }}>
                            <MdAddShoppingCart />
                        </IconButton>
                    }
                />
                <Overflow>
                    <CardMedia
                        component="img"
                        height="auto"
                        alt={`raquete ${raquete.title} feita de ${raquete.material}, confira mais detalhes: ${raquete.description}`}
                        image={raquete.img[0]}
                        onClick={() => NavigationValidate(navigation, raquete.id)}
                        sx={cardFormated.cardMedia}
                    >
                    </CardMedia>
                </Overflow>
                <CardContent onClick={() => NavigationValidate(navigation, raquete.id)}>

                    <Stack>
                        <PriceSale
                            original={raquete.price.original}
                            sale={raquete.price.sale} />
                    </Stack>

                </CardContent>
            </LazyLoad>
        </Card >
    )

}



export const PriceSale = (
    {
        original,
        sale
    }: {
        original?: number,
        sale?: number
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