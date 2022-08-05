import { Grid, Stack, Box } from "@mui/material"
import { useWindowDimensions } from "../../Utils"
import { Data } from "../../assets/data"
import { CardRaquetes } from '../../components/Cards'
import { Title } from "../../components/Title"
import { ContainerPadding } from "../../components/Container"
export const RaquetesPage = () => {
    const height = useWindowDimensions().height
    return (
       <ContainerPadding>
                <Title text='raquetes' />
                <Grid container alignItems='stretch' spacing={2}>
                    {
                        Data.map(item => (
                            <Grid item justifyContent='flex-start' xs={12} md={4} lg={3}  >
                                <CardRaquetes item={item} />
                            </Grid>
                        ))

                    }
                </Grid>
        </ContainerPadding>
    )
}