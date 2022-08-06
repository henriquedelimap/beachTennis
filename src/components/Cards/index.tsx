import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import { AppearEffect } from "../../components/Animation"
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import { BsHeart } from "react-icons/bs"
import { MdMoreVert } from "react-icons/md"
import { Overflow } from "../../styles"
interface Prop {
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
        }}
}
export const CardRaquetes = (prop: Prop ) => {
    const {item} = prop
    return ( 
        <Card sx={{height: '100%'}}>
            <CardHeader
                avatar={
                    <Avatar variant='square' src={item.img} />
                }
                action={
                    <IconButton aria-label='like'>
                        <BsHeart fontSize={18} />
                    </IconButton>
                }
                title={item.title}
                subheader={item.material}

            />
            <Overflow>

            <AppearEffect y={100} isImg={false} yA={-16} rotate={-16}>

            <CardMedia
            component="img"
            height="auto"
            alt={`raquete ${item.title} feita de ${item.material}, confira mais detalhes: ${item.description}`}
            image={item.img}
            >
            </CardMedia>
            </AppearEffect>
                </Overflow>
            <CardContent>
                <Typography variant='subtitle2' color='text.primary'>
                    {item.subtitle}
                </Typography>
                <Typography sx={{textDecoration: 'line-through'}} variant='body2' color='text.secondary'>
                    R$ {item.price.original.toFixed(3)},00
                </Typography>
                <Typography sx={{fontWeight: 900}} variant='body1' color='text.primary'>
                    R$ {item.price.sale.toFixed(3)},00
                </Typography>
            </CardContent>
        </Card>
    )
}