import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import { BsHeart } from "react-icons/bs"
import { MdMoreVert } from "react-icons/md"
import { useNavigate } from "react-router-dom"


import { Overflow } from "../../styles"
import { AppearEffect } from "../../components/Animation"

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

            {
                animated
                    ? <AppearEffect
                        x={0}

                        xA={-320}
                    >
                        <CardHeader
                            avatar={
                                <Avatar
                                    variant='square'
                                    src={item.img} />
                            }

                            title={item.title}
                            subheader={item.material}

                        />

                    </AppearEffect>
                    : <CardHeader
                        avatar={
                            <Avatar
                                variant='square'
                                src={item.img} />
                        }

                        title={item.title}
                        subheader={item.material}

                    />
            }

            <Overflow>

                {animated
                    ? <AppearEffect
                        y={0}

                        yA={-32}
                        rotate={-16}>

                        <CardMedia
                            component="img"
                            height="auto"
                            alt={`raquete ${item.title} feita de ${item.material}, confira mais detalhes: ${item.description}`}
                            image={item.img}
                            sx={{ maxHeight: '52vh', objectFit: 'contain' }}
                        >
                        </CardMedia>
                    </AppearEffect>
                    : <CardMedia
                        component="img"
                        height="auto"
                        alt={`raquete ${item.title} feita de ${item.material}, confira mais detalhes: ${item.description}`}
                        image={item.img}
                        sx={{ maxHeight: '52vh', objectFit: 'contain' }}
                    >
                    </CardMedia>


                }
            </Overflow>
            <CardContent>
                <Typography
                    variant='subtitle2'
                    color='text.primary'
                    sx={{ textAlign: 'center' }}
                >
                    {item.subtitle}
                </Typography>
                {animated
                    ? <AppearEffect
                        x={0}

                        xA={320}
                    >
                        <PriceSale
                    original={item.price.original}
                    sale={item.price.sale} />

                    </AppearEffect>
                    : <PriceSale
                    original={item.price.original}
                    sale={item.price.sale} />

                }
                
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