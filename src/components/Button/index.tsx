import styled from "@emotion/styled"
import { Button, Typography } from "@mui/material"
interface Prop{
    text: string
    color: string
    position?: string
    size?: number
    top?: number | string
}
export const Btn = (prop: Prop) => {

    const {text, color, position, size, top} = prop
    const fontSize = size !== null ? size : 16
    const positionValue = position ? `position: position` : null
    return (
        <Button sx={{ borderRadius: '.32rem',positionValue, top: top, color: 'white', zIndex: 100, background: color, bottom: '12%', whiteSpace: 'nowrap', p: 2, pt: .5, pb: .5 }}>
            <Typography sx={{ textShadow: '-2px 2px #111111', fontWeight: 'bold', fontSize:size }}>
                {text}
            </Typography>
            <Borda />
            <Borda2 />
        </Button>
    )
}
export const Borda = styled('div')(({ }) => ({
    width: '100%',
    height: '100%',
    border: '2px solid #111111',
    borderRadius: 6,
    position: 'absolute',
    zIndex: -90,
    top: -2,
    left: 2
}))
export const Borda2 = styled('div')(({ }) => ({
    width: '100%',
    height: '100%',
    border: '2px solid #111111',
    borderRadius: 6,
    position: 'absolute',
    zIndex: -90,
    top: 2,
    left: -2
}))