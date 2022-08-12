import { Grid, Stack, Box } from "@mui/material"
import { useWindowDimensions } from "../../Utils"
import { Data } from "../../assets/data"
import { CardRaquetes } from '../../components/Cards'
import { Title } from "../../components/Title"
import { ContainerPadding } from "../../components/Container"
import { m } from 'framer-motion'
import { LazyLoad } from "../../components/Animation"
export const RaquetesPage = () => {
    const height = useWindowDimensions().height
    return (
        <>

            <Title text='raquetes' />
            <Grid
                container
                justifyContent='center'
                alignItems='cneter'
                rowSpacing={2}
                columnSpacing={{ xs: 0, md: 2, lg: 2 }}
                >

                {
                    Data.map(
                        (
                            item,
                            index
                        ) => (
                            
                            <Grid
                            key={index}
                            item
                            container
                            justifyContent='center'
                            alignItems='center'
                            xs={12}
                            md={4}
                            lg={3}
                            >

                                    <CardRaquetes
                                        animated={false}
                                        raquete={item}
                                        />
                                </Grid>
                        ))
                        
                    }
            </Grid>
        </>
    )
}