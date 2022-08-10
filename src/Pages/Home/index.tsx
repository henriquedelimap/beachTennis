import styled from "@emotion/styled"
import { Typography, Container, Box, Divider, Stack, Button } from "@mui/material"
import { Title, TitleCentred } from "../../components/Title"
import { Sale, promocoes } from "../../components/Sale"
import { Beneficios } from "../../components/Beneficio"
import { ContainerPadding } from "../../components/Container"
import { logoHeros, fundoCarbono2, fundoCarbono3 } from "../../assets/img"
import { motion, useScroll, Variants } from 'framer-motion'
import { Absolute } from "../../assets/img/logoQuicksand"
import { Fundo, Sticky, Overflow } from '../../styles'
import { AppearEffect } from "../../components/Animation"
import { Btn } from "../../components/Button"
import { BannerGlass } from "../../components/Banner"
import { Comparativo } from "../../components/Comparativo"
import { Data } from "../../assets/data"
import {  SelectItemToCompare } from "../../components/Seletor"
import {IRaquete} from '../../Types'
import { useEffect, useState } from "react"

export const Home = () => {
    const { scrollYProgress } = useScroll()
    const [itemComparative1, setItemComparative1] = useState('black death 10.2 gold 2022')
    const [firstItemComparative, setFirstItemComparative] = useState<IRaquete>(Data.map(item => item)[0])
    const [secondItemComparative, setSecondItemComparative] = useState<IRaquete>(Data.map(item => item)[0])

    
    const [itemComparative2, setItemComparative2] = useState('DNA EXTREME 2.2 ORANGE 2022')
    const raquetes = [

        {
            title: '',
            img: promocoes[0].img,
            xA: '0%',
            index: 1500
        },
        {
            title: '',
            img: promocoes[0].img,
            xA: '15%',
            index: 4
        },
        {
            title: '',
            img: promocoes[0].img,
            xA: '30%',
            index: 3
        },
        {
            title: '',
            img: promocoes[0].img,
            xA: '45%',
            index: 2
        },
        {
            title: '',
            img: promocoes[0].img,
            xA: '61.6%',
            index: 4
        },
        {
            title: '',
            img: promocoes[0].img,
            xA: '76.6%',
            index: 3
        },
        {
            title: '',
            img: promocoes[0].img,
            xA: '91.6%',
            index: 2
        },



    ]
    let object1 = Data.map(item => {
        if (item.title === itemComparative1) {
            return item
        }
    }).filter(i => i)[0]

    let object2 = Data.map(item => {
        if (item.title === itemComparative2) {
            return item
        }
    }).filter(i => i)[0]

    useEffect(() => {

        object1 === undefined 
        ? setFirstItemComparative(Data.map(item => item)[0]) 
        : setFirstItemComparative(object1)
        
        object2 === undefined
        ? setSecondItemComparative(Data.map(item => item)[1])
        : setSecondItemComparative(object2)


    }, [itemComparative1,  itemComparative2])
    return (
        <>
            <Overflow>
                <ContainerPadding>
                    <Title text='mais procuradas' />
                    <Sale />
                </ContainerPadding>
            </Overflow>

            <Box sx={{ background: '#F1FCFF' }}>
                <ContainerPadding>
                    <TitleCentred text='conheça as marcas' />
                    <Beneficios />
                </ContainerPadding>
            </Box>

            <ContainerPadding>
                <Title text='compare os modelos' />

                <Sticky top={48}>
                    <Stack sx={{ mt: 1 }} spacing={0} direction='row' justifyContent='space-around'>
                        <SelectItemToCompare setItemComparative={setItemComparative1} id='primeira' raquetes={Data} itemComparative={itemComparative1} />
                        <SelectItemToCompare setItemComparative={setItemComparative2} id='segunda' raquetes={Data} itemComparative={itemComparative2} />
                    </Stack>
                </Sticky>
                <Comparativo object={firstItemComparative} object2={secondItemComparative} />
            </ContainerPadding>

            <BannerGlass
                raquetes={raquetes}
                logo={logoHeros}
                btnText={'tecnologia de ponta'}
                description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aut magnam sed velit rerum odio necessitatibus hic numquam molestias dicta.'}
            />

            <Stack sx={{ height: 460 }}>

            </Stack>
        </>
    )
}

