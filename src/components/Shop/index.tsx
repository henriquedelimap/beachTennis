import { Divider, Drawer, Grid, Paper, Typography, Stack, Card, CardHeader, CardMedia, CardContent, IconButton } from "@mui/material"
import { Box } from "@mui/system"
import { CarrinhoSVG } from "../../assets/img/carrinho"
import { Dispatch } from "react"
import { useWindowDimensions } from "../../Utils"
import { useCarrinhoContext } from "../../Common/Context/Carinho"
import { MdAdd, MdRemove } from "react-icons/md"

interface Prop {
    shop: boolean,
    setShop: Dispatch<React.SetStateAction<boolean>>
}
export const DrawerShop = (prop: Prop) => {
    const height = useWindowDimensions().height
    const { shop, setShop } = prop
    const { carrinho, removerProduto, adicionarProduto } = useCarrinhoContext()
    return (
        <Drawer anchor='right' variant='temporary' open={shop} onClose={() => setShop(false)} >
            <Stack spacing={0} sx={{ p: 0 }}>
                <Typography variant={'h5'}>
                    vamos comprar
                </Typography>
                <Divider />
                <Grid container rowSpacing={2} sx={{ p: { xs: 1, md: 3.2, lg: 3.2 }, height: '100%', width: { xs: '85vw', md: '45vw', lg: '45vw' } }} >
                    {
                        carrinho.map(item => (
                            <Grid item xs={12}>

                                <Card sx={{ width: '100%' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <CardMedia
                                            sx={{ height: '6rem', width: 'auto' }}
                                            component='img'
                                            image={item.img[0]} />
                                        <CardContent sx={{width: '100%', display: 'flex', justifyContent:'space-between'}}>
                                            <Typography variant={'subtitle2'}>{item.title}</Typography>
                                            
                                            <Stack direction='row' alignItems='center' spacing={2}>
                                                <IconButton onClick={()=>removerProduto(item.id)}>
                                                    <MdRemove />
                                                </IconButton>
                                                <Typography>
                                                    {item.quantity}
                                                </Typography>
                                                <IconButton onClick={()=>adicionarProduto(item)}>
                                                    <MdAdd />
                                                </IconButton>
                                            </Stack>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Stack>
        </Drawer>
    )
}