import { Grid, Stack, Typography } from "@mui/material"
import { Data } from "../../../assets/data"
import { useParams } from "react-router-dom"
import { IRaquete } from "../../../components/Seletor"
import { CardRaquetes } from "../../../components/Cards"
import { NotfFound } from "../../NotFound"
import { CardPagamnto } from "./Pagamento"
import { ContainerPadding } from "../../../components/Container"
import { FixaTecnica } from "./FixaTecnica"

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
            <Grid container justifyContent='center' alignItems='flex-start' rowSpacing={2}>
                <Grid sx={{order: {xs: 2, md: 1, lg: 1}}} item xs={12} lg={4} md={4} >
                    <FixaTecnica />
                </Grid>
                <Grid sx={{order: {xs: 1, md: 2, lg: 2}}} item container alignItems='flex-start' justifyContent='center' xs={12} lg={4} md={4}>
                    <CardRaquetes navigation={false} animated={true} item={raquete} />
                </Grid>
                <Grid sx={{order: {xs: 3, md: 3, lg: 3}}} item alignItems='flex-start'  xs={12} lg={4} md={4}>

                    <CardPagamnto />
                </Grid>
            </Grid>
        </ContainerPadding>
    )
}