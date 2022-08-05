import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import { BsHeart } from "react-icons/bs"
import { MdMoreVert } from "react-icons/md"

export const CardRaquetes = (item: { img: string | undefined; title: any; material: any; description: any; subtitle: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; price: { original: number; sale: number } } ) => {
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
            <CardMedia
            component="img"
            height="auto"
            alt={`raquete ${item.title} feita de ${item.material}, confira mais detalhes: ${item.description}`}
            image={item.img}
            >
            </CardMedia>
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