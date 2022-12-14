import { Stack, Box, Card, Grid, Button, Typography, OutlinedInput } from "@mui/material"
import { Sticky } from "../../styles"
import { Title } from "../../components/Title"
import { FormularioCarrinho, MyInput } from "./Dados"
import { ItemCarrinho } from "./Item"
import { MdSend } from "react-icons/md"
import { IDadosPessoais, usePerfilContext } from "../../Common/Context/DadosPessoais"

export const CarrinhoPage = () => {
    const { handleSubmit, onSubmit, register } = usePerfilContext()

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
                    <FormularioCarrinho />
                </Sticky>
            </Grid>
        </Grid>
    )
}