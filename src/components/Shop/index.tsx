import { Divider, Drawer, Grid, Paper, Typography, Stack, Card, CardHeader, CardMedia, CardContent, IconButton, Button } from "@mui/material"
import { Box } from "@mui/system"
import { CarrinhoSVG } from "../../assets/img/carrinho"
import { Dispatch } from "react"
import { useWindowDimensions } from "../../Utils"
import { useCarrinhoContext } from "../../Common/Context/Carinho"
import { MdAdd, MdRemove } from "react-icons/md"
import { ItemCarrinho } from "../../Pages/Carrinho/Item"
import { useNavigate } from "react-router-dom"
import { Title, TitleCentred } from "../Title"
import { Sticky } from "../../styles"

interface Prop {
    shop: boolean,
    setShop: Dispatch<React.SetStateAction<boolean>>
}
export const DrawerShop = (prop: Prop) => {
    const height = useWindowDimensions().height
    const navigate = useNavigate()
    const { shop, setShop } = prop
    const { carrinho, removerProduto, adicionarProduto } = useCarrinhoContext()
    return (
        <Drawer anchor='right' variant='temporary' open={shop} onClose={() => setShop(false)} >
            <Stack sx={{ height: '100%', width: { xs: '85vw', md: '45vw', lg: '45vw' }, position: 'relative' }} justifyContent='space-between' >

                <Title text='carrinho' />

                <Grid container alignItems='flex-start' rowSpacing={2} sx={{ p: { xs: 1, md: 3.2, lg: 3.2 }, minHeight: '64vh'}} >
                    <ItemCarrinho />

                    <Grid item xs={12} sx={{height: 80}} >

                    </Grid>
                </Grid>
                <Box sx={{ bgcolor: 'transparent', position: 'fixed', bottom: '0', width: { xs: '85vw', md: '45vw', lg: '45vw' }, height: 64 }}>

                    <Button sx={{ p: 3.2, width: '100%'}} onClick={() => navigate('carrinho')} >
                        <Typography>finalizar compra</Typography>
                    </Button>
                </Box>
            </Stack>
        </Drawer>
    )
}