import styled from "@emotion/styled"
import { Button, Typography } from "@mui/material"
interface Prop{
    text: string
    color: string
    position?: string
    size?: string
}
export const Btn = (prop: Prop) => {
    const {text, color, position, size} = prop
    return (
        <Button sx={{ position: position, color: 'white', zIndex: 5, background: color, bottom: '12%', whiteSpace: 'nowrap', p: 2, pt: .5, pb: .5 }}>
            <Typography variant={size ? size : 'body'} sx={{ textShadow: '-2px 2px #111111', fontWeight: 'bold' }}>
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