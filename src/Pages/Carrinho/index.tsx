import { Stack, Box, Card, Grid } from "@mui/material"
import { Sticky } from "../../styles"
import { Title } from "../../components/Title"
import { FormularioDados } from "./Dados"
import { ItemCarrinho } from "./Item"

export const CarrinhoPage = () => {
    return (
        <>
            <Box  >
                <Grid container direction={{ xs: 'column-reverse', md: 'row', lg: 'row' }} >

                    <Grid item container xs={12} md={12} lg={6} justifyContent='space-between' rowSpacing={{xs: 1, md: 2, lg: 2}} sx={{ p: { xs: 1, md: 3.2, lg: 3 } }}>

                            <Title text='seus produtos' />
                            <ItemCarrinho />
                    </Grid>

                    <Grid item direction='column' container xs={12} md={12} lg={6} sx={{ p: { xs: 1, md: 3.2, lg: 3.2 } }} >
                        <Sticky top={100} index={1000}>
                            <Title text='preencha seus dados' />
                            <FormularioDados />
                        </Sticky>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}