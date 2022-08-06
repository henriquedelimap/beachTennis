import { Drawer, List, ListItem, ListItemButton, ListItemText, Stack, Toolbar } from "@mui/material"
import { Dispatch } from "react"
import {useNavigate} from 'react-router-dom'

interface Prop {
    open: boolean, 
    setOpen: Dispatch<React.SetStateAction<boolean>>
    menu: {
        label: string;
        to: string;
    }[]
}
export const DrawerMenu = (prop: Prop ) => {
    const {open, setOpen, menu} = prop
    const navigate = useNavigate()

    return (
        <Drawer anchor='top' open={open} onClose={()=> setOpen(!open)} variant='temporary'>
            <Toolbar>
                <Stack sx={{width: '100%', alignItems: 'center'}}>
                    <List sx={{width: '100%'}}>
                        {
                            menu.map((item, index)=> (
                                <ListItem key={index} >
                                    <ListItemButton  >
                                        <ListItemText onClick={()=>navigate(item.to)} sx={{textAlign: 'center'}} primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </Stack>
            </Toolbar>
        </Drawer>
    )
}