import { AppBar, Box, IconButton, Slide, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Tab, Tabs, Toolbar, useScrollTrigger } from "@mui/material"
import { Logo } from "../Logo"
import { MdArrowBack, MdMenu, MdOutlineShoppingCart, MdPhone } from 'react-icons/md'
import { useRef, useState, ReactElement } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { DrawerMenu } from "../Drawer"
import { DrawerShop } from "../Shop"
import { ModalPhone } from "../ModalPhone"
import { LogoBeachTennis } from "../../assets/img/logoBeachTennis"
import { ContainerPadding } from "../../components/Container"


interface Props {

    window?: () => Window;
    children: ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}



export const Header = ({
    buttonBack,
    props
}: {
    buttonBack?: boolean
    props?: Props
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
        <HideOnScroll {...props}>

            <AppBar sx={{ p: { xs: 0, md: 1, lg: 1 }, pb: 0, pt: 0, zIndex: 1500 }}>
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

                        <Tabs indicatorColor={undefined} sx={{ p: 0, display: { md: 'none', xs: 'none', lg: 'flex' } }} centered onChange={handleChange} >
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
                                sx={{ justifyContent: { xs: 'end', md: 'center', lg: 'center' } }}
                                icon={<MdOutlineShoppingCart fontSize={24} />} ></Tab>
                        </Tabs>

                    </Stack>


                </Stack>
                <DrawerMenu open={open} setOpen={setOpen} menu={menu} />
                <DrawerShop shop={shop} setShop={setShop} />
            </AppBar >
        </HideOnScroll>
    )
}