import { 
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Stack,
    Box

} from "@mui/material"
import {
    MdAdd,
    MdRemove
} from "react-icons/md"
import { IRaquete } from "../../../Types"

import { useCarrinhoContext } from "../../../Common/Context/Carinho"

export const ItemCarrinho = () => {
    const { carrinho, removerProduto, adicionarProduto } = useCarrinhoContext()
    return (
        <>
        {
            carrinho.map((item: IRaquete) => (
                <Grid item xs={12}>

                    <Card sx={{ width: '100%' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <CardMedia
                                sx={{ height: '6rem', width: 'auto' }}
                                component='img'
                                image={item.img[0]} />
                            <CardContent sx={{width: '100%', display: 'flex', justifyContent:'space-between'}}>
                                <Typography variant={'subtitle2'}>{item.title.toLowerCase()}</Typography>
                                
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
        </> 
    )
}