import { Divider, Drawer, Paper, Typography, Stack } from "@mui/material"
import { Box } from "@mui/system"
import { CarrinhoSVG } from "../../assets/img/carrinho"
import { Dispatch } from "react"
import { useWindowDimensions } from "../../Utils"

interface Prop {
    shop: boolean, 
    setShop: Dispatch<React.SetStateAction<boolean>>
}
export const DrawerShop = (prop: Prop) => {
    const height = useWindowDimensions().height
    const {shop, setShop} = prop
    return ( 
        <Drawer anchor='right' variant='temporary' open={shop} onClose={()=>setShop(false)} >
            <Stack spacing={2} sx={{p:2.5}}>
            <Typography variant={'h5'}>
                vamos comprar
            </Typography>
            <Divider />
            <Stack alignItems='center' justifyContent='center' sx={{p:2, height: height - 320}} >
                <CarrinhoSVG />
            </Stack>
            </Stack>
        </Drawer>
    )
}