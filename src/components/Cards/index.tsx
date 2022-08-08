import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import { AppearEffect } from "../../components/Animation"
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import { BsHeart } from "react-icons/bs"
import { MdMoreVert } from "react-icons/md"
import { Overflow } from "../../styles"
import { useNavigate } from "react-router-dom"
export interface Prop {
    item: {
        id: number;
        img: any;
        title: string;
        subtitle: string;
        price: {
            original: number;
            sale: number;
        };
        stored: number;
        description: string;
        subDescription: string;
        weight: number;
        dimensions: number[];
        color: string[];
        material: string;
        role: {
            category: string
            brand: any
        }
    }
    animated?: boolean
    navigation?: boolean
}
export const CardRaquetes = (prop: Prop) => {
    const navigate = useNavigate()
    const { item, animated, navigation } = prop

    function NavigationValidate(nav: boolean | undefined, to?: number){
        if(nav === false){
            return null
        } 
        return  navigate(`${to}`)
    }

    
    return (
        <Card  elevation={animated ? 0 : 1} onClick={() => NavigationValidate(navigation, item.id)} sx={{ height: '100%', cursor: 'pointer', width: '100%', maxWidth: '28rem', maxHeight: '80vh' }}>
            <CardHeader
                avatar={
                    <Avatar
                        variant='square'
                        src={item.img} />
                }
                action={
                    <Avatar
                        variant='square'
                        src={item.role.brand}
                        sx={{
                            width: 132, '& img': {
                                width: 124,
                                objectFit: 'fill',
                            },
                        }} 
                        />
                }
                title={item.title}
                subheader={item.material}

            />
            <Overflow>

                {animated
                    ? <AppearEffect
                        y={0}
                        
                        isImg={false}
                        yA={-32}
                        rotate={-16}>

                        <CardMedia
                            component="img"
                            height="auto"
                            alt={`raquete ${item.title} feita de ${item.material}, confira mais detalhes: ${item.description}`}
                            image={item.img}
                            sx={{maxHeight: '56vh', objectFit: 'contain'}}
                            >
                        </CardMedia>
                    </AppearEffect>
                    : <CardMedia
                    component="img"
                    height="auto"
                    alt={`raquete ${item.title} feita de ${item.material}, confira mais detalhes: ${item.description}`}
                    image={item.img}
                    sx={{maxHeight: '56vh', objectFit: 'contain'}}
                    >
                    </CardMedia>}
            </Overflow>
            <CardContent>
                <Typography
                    variant='subtitle2'
                    color='text.primary'
                    sx={{textAlign: 'center'}}
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
                R$ {original.toFixed(3)},00
            </Typography>
            <Typography
                sx={{
                    fontWeight: 900,
                    textAlign: 'center'
                }}
                variant='body1'
                color='text.primary'
            >
                R$ {sale.toFixed(3)},00
            </Typography>
        </>
    )
}