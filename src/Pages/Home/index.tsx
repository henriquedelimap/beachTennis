
import { Typography, Container, Box,  Grid, Paper } from "@mui/material"
import { Title, TitleCentred } from "../../components/Title"
import { Sale, promocoes } from "../../components/Sale"
import { Beneficios } from "../../components/Beneficio"

import { motion, useScroll, Variants } from 'framer-motion'
import { Fundo, Sticky, Overflow } from '../../styles'

import { LogoQuicksand } from "../../assets/img/logoQuicksand"

import { Comparativo } from "../../components/Comparativo"
import { Data } from "../../assets/data"
import { SelectItemToCompare } from "../../components/Seletor"
import { IRaquete } from '../../Types'
import { useEffect, useState } from "react"

export const Home = () => {
    const [itemComparative1, setItemComparative1] = useState('black death 10.2 gold 2022')
    const [itemComparative2, setItemComparative2] = useState('DNA EXTREME 2.2 ORANGE 2022')

    const [firstItemComparative, setFirstItemComparative] = useState<IRaquete>(Data.map(item => item)[0])
    const [secondItemComparative, setSecondItemComparative] = useState<IRaquete>(Data.map(item => item)[0])

    
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
    }, [itemComparative1, itemComparative2])
    
    return (
        <Box>
            <Grid container rowSpacing={1.6} sx={{ position: 'relative' }}>

                <Grid xs={12} item   >
                    <Box sx={{ bgcolor: 'white', borderRadius: '3.2rem', position: 'relative' }}>
                        <Title text='mais procuradas' />
                        <Overflow>
                            <Sale />
                            <LogoQuicksand />
                        </Overflow>
                    </Box>
                </Grid>

                <Grid xs={12} item  >
                    <Box sx={{ bgcolor: 'white', borderRadius: '3.2rem' }}>

                        <Title text='compare modelos' />

                        <Sticky index={200} top={8}>
                            <Grid container columnSpacing={{ xs: .5, md: 4, lg: 4 }}>
                                <Grid item xs={6}>

                                    <SelectItemToCompare setItemComparative={setItemComparative1} id='primeira' raquetes={Data} itemComparative={itemComparative1} />
                                </Grid>
                                <Grid item xs={6}>

                                    <SelectItemToCompare setItemComparative={setItemComparative2} id='segunda' raquetes={Data} itemComparative={itemComparative2} />
                                </Grid>
                            </Grid>
                        </Sticky>

                        <Comparativo object={firstItemComparative} object2={secondItemComparative} />
                    </Box>
                </Grid>

                <Grid xs={12} item sx={{ color: '#ffffff' }}>
                    <Box sx={{ borderRadius: '0rem', bgcolor: '#1d1d1f',  }}>
                        <TitleCentred text='marcas' color='#eeeeee' />

                        <Beneficios />
                    </Box>
                </Grid>


            </Grid>

        </Box>
    )
}

