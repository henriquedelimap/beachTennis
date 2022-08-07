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

const ItemHeader = ({ subtitle, title, description, img, material, role, price }: IRaquete) => {
    return (
        <Card elevation={0}>
            <CardMedia
                component='img'
                height='auto'
                alt={`raquete ${title} feita de ${material}, confira mais detalhes: ${description}`}
                image={img}></CardMedia>

            <CardContent>

                <Stack sx={{ pt: 2 }} spacing={2} direction='column' alignItems='center' justifyContent='center'>
                    <Typography align='center' variant='body1'>
                        {title}
                    </Typography>

                    <PriceSale original={price.original} sale={price.sale} />

                </Stack>
            </CardContent>
        </Card>
    )
}

const ItemContentCreator = ({
    content
}: { content: string }) => {
    return (
        <Card sx={{ width: '100%' }} elevation={0}>
            <CardContent>
                <Stack direction='column' alignItems='center' justifyContent='center'>
                    <Typography align='center' variant='body1'>
                        {content}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
const ItemContent = ({
    content, content2, title
}: { content: string, title: string, content2: string }) => {
    return (
        <Grid item width='100%' >
            <Typography variant={'h4'}>{title}</Typography>
            <Divider sx={{ width: '100%' }} />
            <Stack direction='row'>
                <ItemContentCreator content={content} />
                <ItemContentCreator content={content2} />
            </Stack>
        </Grid>
    )
}

export const Comparativo = (prop: Prop) => {
    const { object, object2 } = prop


    return (

        <Stack spacing={0} sx={{overflow: 'hidden'}} >
            <Stack spacing={0} direction='row' justifyContent='space-around' sx={{ width: '100%' }}>
                <ItemHeader {...object} />
                <ItemHeader {...object2} />
            </Stack>

            <Grid container  >
                <ItemContent title={'cores'} content={`${object.color[0]}  ${object.color[1]}  ${object.color[2]}`} content2={`${object.color[0]}  ${object.color[1]}  ${object.color[2]}`} />
                <ItemContent title={'material'} content={object.material} content2={object2.material} />
                <ItemContent title={'descrição'} content={object.description} content2={object2.description} />
                <ItemContent title={'dimensão'} content={`${object.dimensions[0]} x ${object.dimensions[1]} x ${object.dimensions[2]}`} content2={`${object.dimensions[0]} x ${object.dimensions[1]} x ${object.dimensions[2]}`} />
            </Grid>
        </Stack>
    )
}