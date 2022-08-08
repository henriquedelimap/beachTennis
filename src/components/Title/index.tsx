import styled from "@emotion/styled"
import { Stack, Typography } from "@mui/material"

interface Prop{
    text: string
}
export const Title = (prop: Prop) => {
    const {text} = prop
    return (
        <Stack spacing={2} direction='row' alignItems='center' >
            <Decoration />
            <Typography variant='h4' color='#1F9DBE' sx={{'&:first-letter':{textTransform: 'capitalize'}}} >{text}</Typography>
        </Stack>
    )
}
export const TitleCentred = (prop: Prop) => {
    const {text} = prop
    return (
        <Stack alignSelf='center' sx={{width: 'fit-content'}} spacing={.5} direction='column'>
            <Typography  variant='h4' color='#1F9DBE'>{text}</Typography>
            <DecorationHorizontal />
        </Stack>
    )
}


const DecorationHorizontal = styled('div')(({})=>({
    height: '.2rem',
    width: '100%',
    background:'#1F9DBE'
}))


const Decoration = styled('div')(({})=>({
    height: '3.2rem',
    width: '.3rem',
    background:'#1F9DBE'

}))