import { Card, CardHeader, CardMedia, Grid, Paper, Stack } from "@mui/material"
import { useEffect } from "react"
import { Data } from "../../assets/data"
import { IRaquete } from "../Seletor"
interface Prop {
    object?: IRaquete
    object2?: IRaquete
}

const Item = ({ title, description, img, material }: IRaquete) => {
    return (
        <Card elevation={0}>
            <CardMedia
                component='img'
                height='auto'
                alt={`raquete ${title} feita de ${material}, confira mais detalhes: ${description}`}
                image={img}></CardMedia>
        </Card>
    )
}
export const Comparativo = (prop: Prop) => {
    const { object, object2 } = prop


    return (
        <Grid container columnSpacing={2} justifyContent='space-around'>

            <Grid item xs={4}>
                <Item {...object} />
            </Grid>


            <Grid item xs={4}>
                <Item {...object2} />
            </Grid>
        </Grid>
    )
}