import { Theme } from "@emotion/react"
import styled from "@emotion/styled"
import { Divider, Stack, Typography } from "@mui/material"
import { Children, ReactNode } from "react"
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
                <Typography noWrap fontFamily='Outfit' fontWeight={100} variant='h2' color='#1F9DBE' sx={{p: 3.2, pl:0, '&:first-letter': { textTransform: 'capitalize' } }} >{text}</Typography>
            </LazyLoad>
        </Stack>
    )
}
export const TitleCentred = (prop: Prop) => {
    const { text, color } = prop
    const cor = color === undefined ? '#1F9DBE' : color
    return (
        <LazyLoad once>
            <Stack  sx={{ width: '100%' }} spacing={0} direction='column'>
                <Typography sx={{p:3.2}} align='center' fontFamily='Outfit' fontWeight={100} variant='h2' color={cor}>{text}</Typography>
                <DecorationHorizontal cor={cor} />
            </Stack>
        </LazyLoad>
    )
}

export const TitleBasic = ({ text }: { text?: string }) => {
    return (
        <>
            <LazyLoad once>
                <Typography fontFamily='Outfit' fontWeight={100} variant={'h3'}>{text}</Typography>
            </LazyLoad>
            <Divider sx={{ width: '100%' }} />
        </>
    )
}
export const SubTitleBasic = ({ text, align }: { text?: string, align?: string }) => {
    const alinha = align === 'right' ? 'right' : 'left'
    return (
        <>
            <LazyLoad once>
                <Typography align={alinha} fontFamily='Outfit' fontWeight={100} variant={'h4'}>{text}</Typography>
            </LazyLoad>
        </>
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