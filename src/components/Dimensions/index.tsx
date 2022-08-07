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
        <Box sx={{ position: 'relative' }}>
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
    right: -24,
    top: '30%'
}))
const Comprimento = styled('p')(({ }) => ({
    position: 'absolute',
    right: '40%',
    top: -36
}))
const Largura = styled('p')(({ }) => ({
    position: 'absolute',
    left: 8,
    bottom: -28
}))