import { Stack, Box, Card, Grid } from "@mui/material"
import { ItemCarrinho } from "./Item"

export const CarrinhoPage = () => {
    return (
        <>
            <Stack sx={{ height: 64 }} />
            <Box  >

                <Grid container rowSpacing={2} sx={{ p: { xs: 1, md: 3.2, lg: 3.2 }, height: '100%', width: '100%' }} >
                    <ItemCarrinho  />
                </Grid>
            </Box>
        </>
    )
}