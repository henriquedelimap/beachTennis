import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import { BsHeart } from "react-icons/bs"
import { MdMoreVert } from "react-icons/md"
interface Prop{
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
    };
}
export const CardRaquetes = (prop: Prop ) => {
    const {img, title, description, material, subtitle, price, role} = prop
    return ( 
        <Card sx={{height: '100%'}}>
            <CardHeader
                avatar={
                    <Avatar variant='square' src={img} />
                }
                action={
                    <IconButton aria-label='like'>
                        <BsHeart fontSize={18} />
                    </IconButton>
                }
                title={title}
                subheader={material}

            />
            <CardMedia
            component="img"
            height="auto"
            alt={`raquete ${title} feita de ${material}, confira mais detalhes: ${description}`}
            image={img}
            >
            </CardMedia>
            <CardContent>
                <Typography variant='subtitle2' color='text.primary'>
                    {subtitle}
                </Typography>
                <Typography sx={{textDecoration: 'line-through'}} variant='body2' color='text.secondary'>
                    R$ {price.original.toFixed(3)},00
                </Typography>
                <Typography sx={{fontWeight: 900}} variant='body1' color='text.primary'>
                    R$ {price.sale.toFixed(3)},00
                </Typography>
            </CardContent>
        </Card>
    )
}