import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Stack, Typography } from "@mui/material"
import { BsHeart } from "react-icons/bs"
import { MdAdd, MdAddShoppingCart, MdAdUnits, MdMoreVert } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"

import { Overflow } from "../../styles"
import { AppearEffect, LazyLoad } from "../../components/Animation"
import { FormatPrice } from "../../Utils"
import { IRaquete } from "../../Types"
import { CarrinhoContextType, useCarrinhoContext } from "../../Common/Context/Carinho"

export interface Prop {
    raquete: IRaquete
    animated?: boolean
    navigation?: boolean
}
export const CardRaquetes = (prop: Prop) => {
    const navigate = useNavigate()
    const { raquete, animated, navigation } = prop
    
    const {carrinho, setCarrinho, adicionarProduto} = useCarrinhoContext()
    const adicionado = carrinho.find(item => item.id === raquete.id)

    function NavigationValidate(nav: boolean | undefined, to?: number) {
        if (nav === false) {
            return null
        }
        return navigate(`${to}`)
    }
    return (

        <Card
            elevation={animated ? 0 : 1}
            
            sx={{
                height: '100%',
                
                width: '100%',
                position: 'relative',
                maxWidth: '28rem',
                maxHeight: '80vh',
            }}
        >
            <LazyLoad>
                <CardHeader
                        sx={{cursor: 'pointer',}}
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
                        <IconButton onClick={()=>{
                            adicionarProduto(raquete)
                        }}>
                            <MdAddShoppingCart color={adicionado ? 'green' : ''} />
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
                        sx={{ maxHeight: '52vh', objectFit: 'contain' }}
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