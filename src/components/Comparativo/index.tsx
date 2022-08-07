import { Card, CardContent, List, ListItem, ListItemButton, ListItemText, ListItemIcon, CardHeader, CardMedia, Divider, Grid, Paper, Stack, Typography } from "@mui/material"
import { PriceSale } from "../Cards"
import { useEffect } from "react"
import { MdWork } from "react-icons/md"
import { Data } from "../../assets/data"
import { IRaquete } from "../Seletor"
interface Prop {
    object: IRaquete
    object2: IRaquete
}

const Item = ({ title, description, img, material, role, price }: IRaquete) => {
    return (
        <Card elevation={0}>
            <CardMedia
                component='img'
                height='auto'
                alt={`raquete ${title} feita de ${material}, confira mais detalhes: ${description}`}
                image={img}></CardMedia>

            <CardContent>
                <Divider />

                <Stack sx={{pt:2}} spacing={2} direction='column' alignItems='center' justifyContent='center'>
                    <Typography align='center' variant='body1'>
                        {title}
                    </Typography>

                    <PriceSale original={price.original} sale={price.sale} />

                    <Divider flexItem sx={{p:2}}>MATERIAL</Divider>

                    <Typography align='center' variant='body1'>
                        {material}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
export const Comparativo = (prop: Prop) => {
    const { object, object2 } = prop


    return (
        <Grid container justifyContent='space-around'>

            <Grid item xs={6}>
                <Item {...object} />
            </Grid>


            <Grid item xs={6}>
                <Item {...object2} />
            </Grid>
        </Grid>
    )
}