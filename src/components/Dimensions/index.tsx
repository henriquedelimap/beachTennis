import styled from "@emotion/styled"
import { RaqueteIMG } from "../../assets/img"
import { Box } from '@mui/material'
interface Prop {
    altura: number
    largura: number
    comprimento: number
}

export const DimensaoRaquete = ({ altura, largura, comprimento }: Prop) => {
    return (
        <Box sx={{ position: 'relative', p:1 }}>
            <Altura>

                {altura}
            </Altura>
            <Largura>

            {largura} 
            </Largura>
            <Comprimento>

            {comprimento}
            </Comprimento>
            <RaqueteIMG />
        </Box>

    )
}

const Altura = styled('p')(({ }) => ({
    position: 'absolute',
    right: -16,
    top: '32%'
}))
const Comprimento = styled('p')(({ }) => ({
    position: 'absolute',
    right: '40%',
    top: -24
}))
const Largura = styled('p')(({ }) => ({
    position: 'absolute',
    left: 16,
    bottom: -16
}))