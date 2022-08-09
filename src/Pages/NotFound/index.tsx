import styled from "@emotion/styled"
import { Stack, Typography } from "@mui/material"
import { useParams } from "react-router-dom"

export const NotfFound = () => {
    const { id } = useParams()

    return (
        <Stack width='100vw' height='100vh' sx={{ position: 'fixed', background: 'white', zIndex: 900 }}>

            <Scene>
                <Box>

                    <Front>
                    </Front>

                    <Back>
                        <p>404</p>

                    </Back>

                    <Right>
                        <p>404</p>

                    </Right>

                    <Left>
                        <p>404</p>

                    </Left>

                    <Top>

                    </Top>

                    <Bottom></Bottom>

                </Box>

            </Scene>


        </Stack>
    )
}

const Scene = styled('div')(({ }) => ({
    perspective: '12rem',
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

}))

const Box = styled('div')(({ }) => ({
    width: '100vw',
    height: '100vh',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transform: 'translateZ(-3rem) translateY(13rem) translateX(-16rem) rotateX(1deg) rotateZ(0deg)'
}))

const Front = styled('div')(({ }) => ({
    position: 'absolute',

    background: 'transparent',
    transform: 'rotateY(0deg) translateZ( -32rem)',
    width: '30rem',
    height: '20rem',
    top: '-100%',

    color: 'white',
    fontSize: '16rem',
    fontWight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

}))

const Back = styled('div')(({ }) => ({
    position: 'absolute',

    background: '#111111',
    border: '2px solid #111111',
    transform: 'rotateY(180deg) translateZ( 32rem)',
    width: '64rem',
    height: '32rem',
    top: '0%',

    color: 'white',
    fontSize: '16rem',
    fontWight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

const Right = styled('div')(({ }) => ({
    position: 'absolute',

    background: '#111111af',

    transform: 'rotateY( 90deg) translateZ(32rem)',
    width: '64rem',
    height: '32rem',
    left: '-0rem',

    color: 'white',
    fontSize: '16rem',
    fontWight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

}))

const Left = styled('div')(({ }) => ({

    position: 'absolute',
    background: '#111111af',

    transform: 'rotateY( 90deg) translateZ(-32rem)',
    width: '64rem',
    height: '32rem',
    left: '-0rem',

    color: 'white',
    fontSize: '16rem',
    fontWight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

}))

const Top = styled('div')(({ }) => ({
    position: 'absolute',


    background: '#1111116f',
    transform: 'rotateX( 90deg)  translateZ(32rem)',
    width: '64rem',
    height: '64rem',
    left: '0',

    color: 'white',
    fontSize: '16rem',
    fontWight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

}))

const Bottom = styled('div')(({ }) => ({

    position: 'absolute',

    background: '#1111116f',

    transform: 'rotateX( 90deg)  translateZ(2rem)',
    width: '64rem',
    height: '68rem',
    left: '0',

    color: 'white',
    fontSize: '16rem',
    fontWight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

}))

