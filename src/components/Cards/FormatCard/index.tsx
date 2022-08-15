import { useEffect, useState } from "react";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    Stack,
    Typography
} from "@mui/material"
import { IRaquete } from "Types";
import { useCarrinhoContext } from "../../../Common/Context/Carinho";
import { Overflow } from "../../../styles";
import { AppearEffect, LazyLoad } from "../../Animation"
import { MdAdd, MdAddShoppingCart, MdAdUnits, MdMoreVert, MdRemove } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { PriceSale } from "..";
interface Prop {
    cardFormat: string
    raquete: IRaquete
    animated?: boolean
    navigation?: boolean
    adicionarProduto: (novoProduto: IRaquete) => void
}
export const FormatedCard = (prop: Prop) => {
    const { cardFormat, raquete, animated, navigation, adicionarProduto } = prop


    const [cardFormated, setCardFormated] = useState(<></>)
    const navigate = useNavigate()



    function NavigationValidate(nav: boolean | undefined, to?: number) {
        if (nav === false) {
            return null
        }
        return navigate(`${to}`)
    }
    switch (cardFormat) {
        case 'list':
            setCardFormated(
                <Card sx={{ width: '100%' }} >
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <CardMedia
                            sx={{ height: '6rem', width: 'auto' }}
                            component='img'
                            image={raquete.img[0]} />
                        <CardContent sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant={'subtitle2'}>{raquete.title.toLowerCase()}</Typography>

                            <Stack direction='row' alignItems='center' spacing={2}>

                            </Stack>
                        </CardContent>
                    </Box>
                </Card>
            )

            break;
        default:
            setCardFormated(
                <Card
                    elevation={animated ? 0 : 1}
                    sx={{
                        height: '100%',
                        width: '100%',
                        maxHeight: '80vh',
                        position: 'relative',
                        maxWidth: '28rem',
                    }}
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
                                sx={{ maxHeight: '53vh', objectFit: 'contain' }}
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

            break;
    }

    return cardFormated
}