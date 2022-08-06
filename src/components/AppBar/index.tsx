import { AppBar, Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Tab, Tabs, Toolbar } from "@mui/material"
import { Logo } from "../Logo"
import { MdMenu, MdOutlineShoppingCart, MdPhone } from 'react-icons/md'
import { useRef, useState } from "react"
import { useNavigate} from 'react-router-dom'
import { DrawerMenu } from "../Drawer"
import { DrawerShop } from "../Shop"
import { ModalPhone } from "../ModalPhone"
import { LogoBeachTennis } from "../../assets/img/logoBeachTennis"
export const Header = () => {
    const navigate = useNavigate()
    console.log(history);
    
    const [open, setOpen] = useState(false)
    const [shop, setShop] = useState(false)
    const [phone, setPhone] = useState(false)
    const [value, setValue] = useState(0)
    const menu = [
        {
            label: 'novidade',
            to: ''
        },
        {
            label: 'raquetes',
            to: 'raquetes'
        },
        {
            label: 'em breve',
            to: 'emBreve'
        },
        {
            label: 'sobre nós',
            to: 'sobreNos'
        },
        
    ]
    const icones = [
        {
            icone: <MdPhone fontSize={24} />,
            click: ()=>setPhone(true)
        },
        {
            icone: <MdOutlineShoppingCart fontSize={24} />,
            click: () => setShop(true)
        }
    ]
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <AppBar sx={{p: 0}}>
            <Toolbar sx={{ p: 2, pt: 0, pb: 0}}>
                <Stack sx={{ width: '100%' }} direction='row' alignItems='flex-end' justifyContent='space-between' >

                    <Stack spacing={2} direction='row' alignItems='center'>
                        <IconButton
                            onClick={() => setOpen(true)}
                            sx={{ display: { xs: 'flex', md: 'flex', lg: 'none' }, p: .5, transition: 'all 1s ease' }}>
                            <MdMenu />
                        </IconButton>

                        <LogoBeachTennis />
                    </Stack>
                    <Box>

                        <Tabs sx={{p:0}} centered value={value} onChange={handleChange} >
                            {
                                menu.map(item => (
                                    <Tab onClick={()=>navigate(item.to)}  sx={{display: {md: 'none', xs: 'none', lg: 'flex'}}} label={item.label} />
                                ))
                            }
                            {
                                icones.map(icone => (
                                    <Tab onClick={icone.click} sx={{display: {md: 'none', xs: 'none', lg: 'flex'}}} label={icone.icone} />

                                ))
                            }
                        </Tabs>
        
                    </Box>


                </Stack>
                <DrawerMenu open={open} setOpen={setOpen} menu={menu} />
                <DrawerShop shop={shop} setShop={setShop} />
                <ModalPhone phone={phone} setPhone={setPhone} />
            </Toolbar>
        </AppBar >
    )
}