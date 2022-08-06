import styled from "@emotion/styled"
import { Button, Typography } from "@mui/material"
interface Prop{
    text: string
    color: string
    position?: string
    size?: string
    top?: number | string
}
export const Btn = (prop: Prop) => {

    const {text, color, position, size, top} = prop
    const fontSize = size ? size : 'body'
    const positionValue = position ? `position: position` : null
    return (
        <Button sx={{ positionValue, top: top, color: 'white', zIndex: 5, background: color, bottom: '12%', whiteSpace: 'nowrap', p: 2, pt: .5, pb: .5 }}>
            <Typography sx={{ textShadow: '-2px 2px #111111', fontWeight: 'bold', fontSize:fontSize }}>
                {text}
            </Typography>
            <Borda />
            <Borda2 />
        </Button>
    )
}
const Borda = styled('div')(({ }) => ({
    width: '100%',
    height: '100%',
    border: '2px solid #111111',
    borderRadius: 6,
    position: 'absolute',
    zIndex: -1,
    top: -2,
    left: 2
}))
const Borda2 = styled('div')(({ }) => ({
    width: '100%',
    height: '100%',
    border: '2px solid #111111',
    borderRadius: 6,
    position: 'absolute',
    zIndex: -1,
    top: 2,
    left: -2
}))