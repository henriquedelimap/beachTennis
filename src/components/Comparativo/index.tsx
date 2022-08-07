import { Card, CardContent, List, ListItem, ListItemButton, ListItemText, ListItemIcon, CardHeader, CardMedia, Divider, Grid, Paper, Stack, Typography } from "@mui/material"
import { PriceSale } from "../Cards"
import { ReactNode, useEffect } from "react"
import { MdWork } from "react-icons/md"
import { Data } from "../../assets/data"
import { IRaquete } from "../Seletor"
import { DimensaoRaquete } from "../../components/Dimensions"
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
                image={img}
                sx={{width: '12rem', maxWidth: '24rem'}}
                ></CardMedia>

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
    content, children
}: { content?: string, children?: ReactNode }) => {
    return (
        <Card sx={{ width: '100%' }} elevation={0}>
            <CardContent>
                <Stack direction='column' alignItems='center' justifyContent='center'>
                    <Typography align='center' variant='body1'>
                        {content}
                        {children}
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
            <Stack direction='row' sx={{pt: 4}}>
                <ItemContentCreator content={content} />
                <ItemContentCreator content={content2} />
                
            </Stack>
        </Grid>
    )
}

const ItemContentDimensionCreator = ({
    dimension, dimension2, title,
}: { title: string, dimension: number[], dimension2: number[]}) => {
    return (
        <Grid item width='100%' >
            <Typography variant={'h4'}>{title}</Typography>
            <Divider sx={{ width: '100%' }} />
            <Stack direction='row' sx={{pt: 4}}>
                <ItemContentCreator>
                    <DimensaoRaquete altura={dimension[0]} largura={dimension[1]} comprimento={dimension[2]} />
                </ItemContentCreator>
                <ItemContentCreator>
                    <DimensaoRaquete altura={dimension2[0]} largura={dimension2[1]} comprimento={dimension2[2]} />
                </ItemContentCreator>

            </Stack>
        </Grid>
    )
}

export const Comparativo = (prop: Prop) => {
    const { object, object2 } = prop

    const cor1 = object.color[0] !== undefined ? object.color[0] : '---' 
    const cor2 = object2.color[0] !== undefined ? object2.color[0] : '---' 
    return (

        <Stack spacing={0} sx={{overflow: 'hidden'}} >
            <Stack spacing={0} direction='row' justifyContent='space-around' sx={{ width: '100%' }}>
                <ItemHeader {...object} />
                <ItemHeader {...object2} />
            </Stack>

            <Grid container  >
                <ItemContent title={'cores'} content={cor1} content2={cor2} />
                <ItemContent title={'materiais'} content={object.material} content2={object2.material} />
                <ItemContent title={'descrições'} content={object.description} content2={object2.description} />
                <ItemContentDimensionCreator title={'dimensões'} 
                    dimension={object.dimensions}
                    dimension2={object2.dimensions} 
                    /> 
            </Grid>

        </Stack>
    )
}