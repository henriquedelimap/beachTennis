import { Grid, Stack, Typography } from "@mui/material"
import { Data } from "../../../assets/data"
import { useParams } from "react-router-dom"
import { IRaquete } from "../../../components/Seletor"
import { CardRaquetes } from "../../../components/Cards"
import { NotfFound } from "../../NotFound"
import { CardPagamnto } from "./Pagamento"
import { ContainerPadding } from "../../../components/Container"
import { FixaTecnica } from "./FixaTecnica"
import { Sticky } from "../../../styles"

export const RaquetePage = () => {
    const { id } = useParams()
    const raquete = Data.map(item => {
        let itemPage
        if (item.id === Number(id)) {
            itemPage = item
            return itemPage
        }
        return itemPage
    }).filter(i => i)[0]
    if (!raquete) {
        return <NotfFound />
    }

    return (
        <ContainerPadding>
            <Grid columnSpacing={2} container justifyContent='center' alignItems='flex-start' rowSpacing={2} sx={{pt: 4}}>

                <Grid item xs={12} sx={{pb: 4}}>
                    <Typography variant='h4'>Compre sua raquete</Typography>
                </Grid>

                <Grid sx={{ order: { xs: 1, md: 1, lg: 1 }, height: '220vh' }} item container alignItems='flex-start' justifyContent='center' xs={6} lg={8} md={8}>
                    <Sticky top={100}>
                        <CardRaquetes navigation={false} animated={true} item={raquete} />
                    </Sticky>
                </Grid>
                <Grid sx={{ order: { xs: 3, md: 3, lg: 3 } }} item alignItems='flex-start' xs={6} lg={4} md={4}>
                    <CardPagamnto />
                </Grid>
                <Grid sx={{ order: { xs: 3, md: 3, lg: 3 } }} item alignItems='flex-start' xs={12}>
                    <CardPagamnto />
                </Grid>
            </Grid>
        </ContainerPadding>
    )
}