import { AppBar, Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Tab, Tabs, Toolbar } from "@mui/material"
import { Logo } from "../Logo"
import { MdArrowBack, MdMenu, MdOutlineShoppingCart, MdPhone } from 'react-icons/md'
import { useRef, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { DrawerMenu } from "../Drawer"
import { DrawerShop } from "../Shop"
import { ModalPhone } from "../ModalPhone"
import { LogoBeachTennis } from "../../assets/img/logoBeachTennis"
import { ContainerPadding } from "../../components/Container"


export const Header = ({
    buttonBack
}: {
    buttonBack?: boolean
}) => {
    const navigate = useNavigate()
    const params = useParams()

    const [open, setOpen] = useState(false)
    const [shop, setShop] = useState(false)
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

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <AppBar sx={{ p: 0, pb: 0, zIndex: 1000 }}>
            <Stack
                sx={{ width: '100%', pl: 0, pr: 0 }}
                direction='row'
                alignItems='center'
                justifyContent='space-between' >
                <Stack
                    spacing={0}
                    direction='row'
                    alignItems='center' >


                    {buttonBack
                        ? <IconButton
                            onClick={() => navigate(-1)}
                            sx={{ display: { xs: 'flex', md: 'flex', lg: 'flex' }, transition: 'all 1s ease' }}>
                            <MdArrowBack />
                        </IconButton>
                        : <IconButton
                            onClick={() => setOpen(true)}
                            sx={{ display: { xs: 'flex', md: 'flex', lg: 'none' }, transition: 'all 1s ease' }}>
                            <MdMenu />
                        </IconButton>}

                    <LogoBeachTennis />
                </Stack>
                <Stack direction='row'>

                    <Tabs indicatorColor={undefined}  sx={{ p: 0, display: { md: 'none', xs: 'none', lg: 'flex' } }} centered  onChange={handleChange} >
                        {
                            menu.map((item, index) => (
                                <Tab
                                    key={index}
                                    onClick={() => navigate(`/${item.to}`)}
                                    sx={{ display: { md: 'none', xs: 'none', lg: 'flex' } }}
                                    value={index}
                                    label={item.label} />

                            ))
                        }
                        

                    </Tabs>

                    <Tabs indicatorColor={undefined} >
                    <Tab
                            value={8}
                            key={1}
                            onClick={() => setShop(true)}
                            sx={{ justifyContent: {xs: 'end', md: 'center', lg: 'center'}}}
                            icon={<MdOutlineShoppingCart fontSize={24} />} ></Tab>
                    </Tabs>

                </Stack>


            </Stack>
            <DrawerMenu open={open} setOpen={setOpen} menu={menu} />
            <DrawerShop shop={shop} setShop={setShop} />
        </AppBar >
    )
}