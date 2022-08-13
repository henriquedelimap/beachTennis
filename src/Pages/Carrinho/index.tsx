import { Stack, Box, Card, Grid, Button, Typography } from "@mui/material"
import { Sticky } from "../../styles"
import { Title } from "../../components/Title"
import { AdressForm, FormularioDados } from "./Dados"
import { ItemCarrinho } from "./Item"
import { MdSend } from "react-icons/md"
import { IDadosPessoais, usePerfilContext } from "../../Common/Context/DadosPessoais"

export const CarrinhoPage = () => {
    const {handleSubmit, onSubmit}  = usePerfilContext()
    
    return (
        <Grid container>

            <Grid
                item
                direction='column'
                container
                xs={12}
                md={12}
                lg={6}
                sx={{
                    p: {
                        xs: 1,
                        md: 3.2,
                        lg: 3.2
                    }
                }}
            >

                <Title text='seus produtos' />
                <Grid
                    container
                    direction='row'
                    rowSpacing={{
                        xs: 1,
                        md: 2,
                        lg: 2
                    }}
                >
                    <ItemCarrinho />
                </Grid>
            </Grid>

            <Grid
                item
                direction='column'
                container
                xs={12}
                md={12}
                lg={6}
                sx={{
                    p: {
                        xs: 1,
                        md: 3.2,
                        lg: 3.2
                    }
                }}
            >
                <Sticky top={30} index={1000}>
                    <form onSubmit={handleSubmit((data)=> {
                        console.log(data);
                        
                    })}>

                        <Title text='dados pessoais' />
                        <FormularioDados />
                        <Title text='endereço' />
                        <AdressForm />

                        <Box sx={{ bgcolor: 'transparent', width: { xs: '85vw', md: '45vw', lg: '45vw' }, height: 75 }}>

                            <Button type='submit' sx={{ p: 3.2, width: '100%', borderRadius: 0 }}>
                                <Typography>finalizar pedido</Typography>
                            </Button>
                        </Box>
                    </form>
                </Sticky>
            </Grid>


        </Grid>
    )
}