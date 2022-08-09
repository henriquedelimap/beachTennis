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
import { FormatPrice } from "../../../Utils"

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
            <Grid 
                columnSpacing={2} 
                container 
                justifyContent='center' 
                alignItems='flex-start' 
                rowSpacing={4} 
                sx={{ pt: 4 }}>

                <Grid 
                    item 
                    xs={12} >
                    <Typography variant='h4'>Compre sua raquete</Typography>
                    <Typography variant='subtitle1'>{FormatPrice(raquete.price.sale)}</Typography>
                </Grid>

                <Grid 
                    sx={
                        { 
                            height: { 
                                xs: '100%', 
                                md: '220vh', 
                                lg: '220vh' 
                            }
                        }}
                    item
                    container
                    alignItems='flex-start'
                    justifyContent='center'

                    xs={12}
                    md={6}
                    lg={6} 
                >
                    <Sticky top={100}>
                        <CardRaquetes 
                            navigation={false} 
                            animated={true} 
                            item={raquete} 
                        />
                    </Sticky>
                </Grid>

                <Grid 
                    item 
                    alignItems='flex-start' 
                    justifyContent='center'
                    xs={12} 
                    md={6} 
                    lg={6} >
                    <CardPagamnto />
                </Grid>

                <Grid 
                    item 
                    alignItems='flex-start' 
                    xs={12}
                >
                    <CardPagamnto />
                </Grid>
            </Grid>
        </ContainerPadding>
    )
}