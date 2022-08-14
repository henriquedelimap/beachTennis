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
import { AppearEffect, LazyLoad } from "../../../components/Animation"
import { MdAdd, MdAddShoppingCart, MdAdUnits, MdMoreVert, MdRemove } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { PriceSale } from "..";
interface Prop {
    cardFormat: string
    raquete: IRaquete
    animated?: boolean
    navigation?: boolean
}
export const FormatedCard = (prop: Prop) => {
    const { cardFormat, raquete, animated, navigation } = prop
    const { adicionarProduto, removerProduto, carrinho } = useCarrinhoContext()
    const [form, setForm] = useState(<></>)
    const navigate = useNavigate()

    const adicionado = carrinho.find(item => item.id === raquete.id)

    function NavigationValidate(nav: boolean | undefined, to?: number) {
        if (nav === false) {
            return null
        }
        return navigate(`${to}`)
    }
        useEffect(() => {
            switch (cardFormat) {
                case 'list':
                    setForm(<Card sx={{ width: '100%' }} >
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <CardMedia
                                sx={{ height: '6rem', width: 'auto' }}
                                component='img'
                                image={raquete.img[0]} />
                            <CardContent sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant={'subtitle2'}>{raquete.title.toLowerCase()}</Typography>

                                <Stack direction='row' alignItems='center' spacing={2}>
                                    <IconButton onClick={() => removerProduto(raquete.id)}>
                                        <MdRemove />
                                    </IconButton>
                                    <Typography>
                                        {raquete.quantity}
                                    </Typography>
                                    <IconButton onClick={() => adicionarProduto(raquete)}>
                                        <MdAdd />
                                    </IconButton>
                                </Stack>
                            </CardContent>
                        </Box>
                    </Card>)

                    break;
                default:

                    setForm(<Card
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
                    </Card >)

                    break;
            }
        }, [cardFormat])

    return form
}