import { Card, CardContent, List, ListItem, ListItemButton, ListItemText, ListItemIcon, CardHeader, CardMedia, Divider, Grid, Paper, Stack, Typography } from "@mui/material"
import { PriceSale } from "../Cards"
import { ReactNode, useEffect } from "react"
import { MdWork } from "react-icons/md"
import { Data } from "../../assets/data"
import { IRaquete } from "../../Types"
import { DimensaoRaquete } from "../../components/Dimensions"
import { LazyLoad } from "../../components/Animation"
import { TitleBasic } from "../../components/Title"
import { ContainerPadding } from "../../components/Container"
interface Prop {
    object: IRaquete
    object2: IRaquete
}

const ItemHeader = ({ subtitle, title, description, img, material, role, price }: IRaquete) => {
    return (
        <Grid  container alignItems='start' justifyContent='space-between' sx={{ width: '100%' }}>
            <Grid rowSpacing={4} item container xs={12} justifyContent='center' sx={{ minHeight: '24rem' }} >
                <Grid item container justifyContent='center' xs={12}>

                    <img src={img[0]} style={{ width: 'auto', height: '13rem', objectFit: 'contain' }} />
                </Grid>

                <Stack direction='column' alignItems='center' justifyContent='center'>
                    <Typography align='center' variant='body1' sx={{ p: .5, pb: 2 }}>
                        {title.toLowerCase()}
                    </Typography>

                    <PriceSale original={price.original} sale={price.sale} />

                </Stack>
            </Grid>

        </Grid>
    )
}

const ItemContentCreator = ({
    content, children, right, left
}: { content?: string, children?: ReactNode, right?: boolean, left?: boolean }) => {
    const align = right ? 'right' : left ? 'left' : 'center'
    const contentLength = content?.length || 10

    return (
        <Card sx={{ width: '100%' }} elevation={0}>
            <CardContent>
                <Stack direction='column' alignItems='center' justifyContent='center'>
                    <Typography align={align} variant={contentLength < 100 ? 'body1' : 'subtitle1'} fontWeight={contentLength < 100 ? '200' : '400'}>
                        {content?.toLowerCase()}
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
        <Grid item width='100%' bgcolor='white' >

            <Grid item xs={12}>
                <TitleBasic text={title} />
            </Grid>


            <Grid item container columnSpacing={0} sx={{ pt: 4, pb: 4 }}>
                <Grid item xs={6}>
                    <LazyLoad>

                        <ItemContentCreator content={content} left />
                    </LazyLoad>
                </Grid>
                <Grid item xs={6}>
                    <LazyLoad>

                        <ItemContentCreator content={content2} right />
                    </LazyLoad>
                </Grid>
            </Grid>
        </Grid>
    )
}

const ItemContentDimensionCreator = ({
    dimension, dimension2, title,
}: { title: string, dimension: number[], dimension2: number[] }) => {
    return (
        <Grid container >
            <Grid item xs={12}>

            <TitleBasic text={title} />
            </Grid>


            <Grid xs={12} item container sx={{ pt: 4, pb: 4 }} columnSpacing={1}  width='100%' >
                <Grid item xs={6} >

                    <ItemContentCreator>
                        <DimensaoRaquete altura={dimension[0]} largura={dimension[1]} comprimento={dimension[2]} />
                    </ItemContentCreator>
                </Grid>
                <Grid item xs={6}>

                    <ItemContentCreator>
                        <DimensaoRaquete altura={dimension2[0]} largura={dimension2[1]} comprimento={dimension2[2]} />
                    </ItemContentCreator>
                </Grid>

            </Grid>
        </Grid>
    )
}

export const Comparativo = (prop: Prop) => {
    const { object, object2 } = prop

    const cor1 = object.color[2] !== undefined ? `${object.color[0]}, ${object.color[1]}, ${object.color[2]}` : `${object.color[0]}, ${object.color[1]}`
    const cor2 = object2.color[2] !== undefined ? `${object2.color[0]}, ${object2.color[1]}, ${object2.color[2]}` : `${object2.color[0]}, ${object2.color[1]}`
    return (

        <Stack sx={{ overflow: 'hidden'}} >
            <Stack direction='row' justifyContent='space-around' sx={{ width: '100%' }}>
                <ItemHeader {...object} />
                <ItemHeader {...object2} />
            </Stack>

            <ContainerPadding>
                <ItemContent title={'cores'} content={cor1} content2={cor2} />
                <ItemContent title={'materiais'} content={object.material} content2={object2.material} />
                <ItemContent title={'descrições'} content={object.description} content2={object2.description} />
                <ItemContentDimensionCreator title={'dimensões'}
                    dimension={object.dimensions}
                    dimension2={object2.dimensions}
                />
            </ContainerPadding>

        </Stack>
    )
}