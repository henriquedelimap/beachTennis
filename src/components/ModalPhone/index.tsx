import { Dialog, DialogTitle } from "@mui/material"
import { Dispatch } from "react"
interface Prop {
    phone: boolean, 
    setPhone: Dispatch<React.SetStateAction<boolean>>
}
export const ModalPhone = (prop: Prop ) => {
    const {phone, setPhone} = prop
    return ( 
        <Dialog onClose={()=>setPhone(false)} open={phone}>
            <DialogTitle>fale comigo</DialogTitle>
            <p>ahhahahahahahahaha</p>
        </Dialog>
    )
}