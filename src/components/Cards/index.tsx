import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import { BsHeart } from "react-icons/bs"
import { MdMoreVert } from "react-icons/md"
import { useNavigate } from "react-router-dom"


import { Overflow } from "../../styles"
import { AppearEffect } from "../../components/Animation"
import { FormatPrice } from "../../Utils"
import { IRaquete } from "../../components/Seletor"

export interface Prop {
    item: IRaquete
    animated?: boolean
    navigation?: boolean
}
export const CardRaquetes = (prop: Prop) => {
    const navigate = useNavigate()
    const { item, animated, navigation } = prop

    function NavigationValidate(nav: boolean | undefined, to?: number) {
        if (nav === false) {
            return null
        }
        return navigate(`${to}`)
    }
    return (
        <Card
            elevation={animated ? 0 : 1}
            onClick={
                () => NavigationValidate(navigation, item.id)}
            sx={{
                height: '100%',
                cursor: 'pointer',
                width: '100%',
                position: 'relative',
                maxWidth: '28rem',
                maxHeight: '80vh'
            }}
        >
            <CardHeader
                avatar={
                    <Avatar
                        variant='square'
                        src={item.img[1]} />
                }
                title={item.title}
                subheader={item.material}
            />
            <Overflow>
                <CardMedia
                    component="img"
                    height="auto"
                    alt={`raquete ${item.title} feita de ${item.material}, confira mais detalhes: ${item.description}`}
                    image={item.img[0]}
                    sx={{ maxHeight: '52vh', objectFit: 'contain' }}
                >
                </CardMedia>
            </Overflow>
            <CardContent>
                <Typography
                    variant='subtitle2'
                    color='text.primary'
                    sx={{ textAlign: 'center' }}
                >
                    {item.subtitle}
                </Typography>
                <PriceSale
                    original={item.price.original}
                    sale={item.price.sale} />
            </CardContent>
        </Card>
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
                variant='body1'
                color='text.primary'
                >
                {FormatPrice(sale)} 
            </Typography>
        </>
    )
}