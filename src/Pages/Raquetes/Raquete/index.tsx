import { Stack, Typography } from "@mui/material"
import { Data } from "../../../assets/data"
import { useParams } from "react-router-dom"
import { IRaquete } from "../../../components/Seletor"
import { CardRaquetes } from "../../../components/Cards"

export const RaquetePage = ( ) => {
    const {id} = useParams()
    const raquete = Data.map(item => {
        let itemPage
        if(item.id === Number(id)){
            itemPage = item
            return itemPage
        }
        return itemPage
    }).filter(i=>i)[0]
    if(!raquete){
        return <p>nao encontrado</p>
    }
    const Title = () => <Typography sx={{textTransform: 'lowercase'}} >{raquete.title}</Typography>
    const Image = () => <img src={raquete.img} alt={raquete.title} />
    
    return (
        <>
        <Stack  justifyContent='center' sx={{height: '100%', width: '100%'}} >
            <CardRaquetes navigation={false} animated={true} item={raquete} />
        </Stack>
        </>
    )
}