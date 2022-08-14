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
import { useSnackbar } from 'notistack'

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
    props,
    cart
}: {
    buttonBack?: boolean
    props?: Props
    cart?: boolean
}) => {
    const navigate = useNavigate()
    const params = useParams()

    const [open, setOpen] = useState(false)
    const [shop, setShop] = useState(false)
    const [value, setValue] = useState('')
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
    const values = [' ',  'raquetes', 'em breve', 'sobre nós']

    const { closeSnackbar } = useSnackbar()
    return (
        <HideOnScroll {...props}>

            <AppBar sx={{ zIndex: 1500 }}>
                <Stack
                    sx={{ width: '100%' }}
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

                        <Tabs value={values} indicatorColor={undefined} sx={{ p: 0, display: { md: 'none', xs: 'none', lg: 'flex' } }} centered  >
                            {
                                menu.map((item, index) => (
                                    <Tab
                                        key={index}
                                        onClick={() => {
                                            navigate(`/${item.to}`)
                                            setValue(item.to)
                                        }}
                                        sx={{ display: { md: 'none', xs: 'none', lg: 'flex' } }}
                                        value={item.label}
                                        label={item.label} />
                                ))
                            }
                        </Tabs>


                        {
                            !cart
                                ? ''
                                : <Tabs value={value}  >
                                    <Tab

                                        value={'carrinho'}
                                        key={'carrinho'}
                                        onClick={() => {
                                            closeSnackbar()
                                            setShop(true)
                                        }}
                                        icon={<MdOutlineShoppingCart fontSize={24} />} ></Tab>
                                </Tabs>
                        }

                    </Stack>


                </Stack>
                <DrawerMenu open={open} setOpen={setOpen} menu={menu} />
                <DrawerShop shop={shop} setShop={setShop} />
            </AppBar >
        </HideOnScroll>
    )
}