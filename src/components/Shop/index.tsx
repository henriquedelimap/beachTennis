import { Divider, Drawer, Grid, Paper, Typography, Stack, Card, CardHeader, CardMedia, CardContent, IconButton, Button } from "@mui/material"
import { Box } from "@mui/system"
import { CarrinhoSVG } from "../../assets/img/carrinho"
import { Dispatch } from "react"
import { useWindowDimensions } from "../../Utils"
import { useCarrinhoContext } from "../../Common/Context/Carinho"
import { MdAdd, MdRemove } from "react-icons/md"
import { ItemCarrinho } from "../../Pages/Carrinho/Item"
import { useNavigate } from "react-router-dom"

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
            <Stack spacing={0} sx={{ p: 0 }}>
                <Typography variant={'h5'}>
                    vamos comprar
                </Typography>
                <Divider />
                <Grid container rowSpacing={2} sx={{ p: { xs: 1, md: 3.2, lg: 3.2 }, height: '100%', width: { xs: '85vw', md: '45vw', lg: '45vw' } }} >
                    <ItemCarrinho />
                </Grid>
                <Button onClick={()=>navigate('carrinho')} >
                    <Typography>finalizar compra</Typography>
                </Button>
            </Stack>
        </Drawer>
    )
}