import { Chip, Grid, Stack, Typography } from "@mui/material"
import { Data } from "../../../assets/data"
import { useParams } from "react-router-dom"
import { NotfFound } from "../../NotFound"
import { CardPagamnto } from "./Pagamento"
import { ContainerPadding } from "../../../components/Container"
import { Sticky } from "../../../styles"
import { CreateCarousel } from "../../../components/Carousel"
import { useContext } from "react"
import { CarrinhoContext } from "../../../Common/Context/Carinho"

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
                    container
                    rowSpacing={.5}
                    xs={12}
                >
                    
                    <Grid item xs={12}>

                        <Typography sx={{ ml: -.6 }} variant='h3' fontFamily='Outfit'   fontWeight={100}>Compre sua raquete</Typography>
                    </Grid>
                    <Grid item xs={12}>

                        <Typography variant='h5' fontFamily='Outfit'   fontWeight={600}>{raquete.title.toLowerCase()}</Typography>
                    </Grid>

                    <Grid item container columnSpacing={.5} xs={12}>
                        {
                            raquete.chips.map(chip => (
                                <Grid item>
                                    {chip === 'novidade' ? <Chip sx={{fontWeight: 600, fontFamily:'Outfit' }} color='success' label={chip} size="small"/> 
                                    : <Chip  label={chip} size="small" sx={{fontFamily:'Outfit'}} variant='outlined' />
                                    }
                                </Grid>
                            ))
                        }
                    </Grid>
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
                    <Sticky index={200} top={100}>
                        {/* <CardRaquetes
                            navigation={false}
                            animated={true}
                            item={raquete}
                        /> */}
                        <CreateCarousel images={raquete.img} />
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