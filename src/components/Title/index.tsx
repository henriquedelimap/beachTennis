import { Theme } from "@emotion/react"
import styled from "@emotion/styled"
import { Stack, Typography } from "@mui/material"
import { LazyLoad } from "../../components/Animation"

interface Prop {
    text: string,
    color?: string
}
export const Title = (prop: Prop) => {
    const { text } = prop
    return (
        <Stack spacing={2} direction='row' alignItems='center' >
            <Decoration />
            <LazyLoad once>

                <Typography fontWeight={100} variant='h4' color='#1F9DBE' sx={{ '&:first-letter': { textTransform: 'capitalize' } }} >{text}</Typography>
            </LazyLoad>
        </Stack>
    )
}
export const TitleCentred = (prop: Prop) => {
    const { text, color } = prop
    const cor = color === undefined ? '#1F9DBE' : color
    return (
        <Stack alignSelf='center' sx={{ width: 'fit-content' }} spacing={.5} direction='column'>
            <LazyLoad once>

                <Typography fontWeight={100} variant='h4' color={cor}>{text}</Typography>
            <DecorationHorizontal cor={cor} />
            </LazyLoad>
        </Stack>
    )
}


const DecorationHorizontal = styled('div')(({ theme, cor }: { theme?: Theme, cor: string }) => ({
    height: '.1rem',
    width: '100%',
    background: cor
}))


const Decoration = styled('div')(({ }) => ({
    height: '3.2rem',
    width: '.2rem',
    background: '#1F9DBE'

}))