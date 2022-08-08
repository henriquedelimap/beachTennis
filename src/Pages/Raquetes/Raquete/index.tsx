import { Stack } from "@mui/material"
import { Data } from "../../../assets/data"
import { useParams } from "react-router-dom"
import { IRaquete } from "../../../components/Seletor"

export const RaquetePage = ( ) => {
    const {id} = useParams()
    const page = Data.map(item => {
        let itemPage
        if(item.id === Number(id)){
            itemPage = item
            return itemPage
        }
        return itemPage
    }).filter(i=>i)[0]
    if(!page){
        return <p>nao encontrado</p>
    }
    const title = page.title
    console.log(page);
    
    
    return (
        <>
        <Stack sx={{height: 56}} />
        <Stack direction='column' sx={{height: '10rem'}} >
        {title}
        </Stack>
        </>
    )
}