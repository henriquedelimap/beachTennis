import { Grid, Stack, Box, OutlinedInput, Chip, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, ToggleButtonGroup, ToggleButton, Slide, Fade, useScrollTrigger } from "@mui/material"
import { FormatPrice, useWindowDimensions } from "../../Utils"
import { Data } from "../../assets/data"
import { CardRaquetes } from '../../components/Cards'
import { Title } from "../../components/Title"
import { SetStateAction, useEffect, useState } from "react"
import { Filter, ToggleCardFormat } from "./Filter"
import { Sticky } from "../../styles"
import { useGlobalContext } from "../../Common/Context/GlobalConfig"
import { MdDashboard, MdFormatListBulleted, MdMoney, MdMoneyOffCsred, MdSailing } from "react-icons/md"
import { FaMoneyBillWave } from 'react-icons/fa'
export const RaquetesPage = () => {

  const [marcaValue, setMarcaValue] = useState('')
  const [materialValue, setMaterialValue] = useState('')
  const [corValue, setCorValue] = useState('')
  const [precoValue, setPrecoValue] = useState('')

  const marcas = Data.map(raquete => raquete.role.category).filter((elem, pos, self) => self.indexOf(elem) == pos)
  const material1 = Data.map(raquete => raquete.material[0])
  const material2 = Data.map(raquete => raquete.material[1])
  const materiais = [...material1, ...material2].filter((elem, pos, self) => self.indexOf(elem) == pos).filter(i=>i)
  const precos = Data.map(raquete => FormatPrice(raquete.price.sale)).filter((elem, pos, self) => self.indexOf(elem) == pos).filter(i=>i)
  const cor1 = Data.map(raquete =>raquete.color[1] )
  const cor2 = Data.map(raquete =>raquete.color[2] )
  const cor3 = Data.map(raquete =>raquete.color[3] )
  const cores = [...cor1, ...cor2, ...cor3].filter((elem, pos, self) => self.indexOf(elem) == pos).filter(i=>i)
  const [cardFormat, setCardFormat] = useState<string>('default')
  console.log(materiais);
  

  const handleChange = (e: any) => {
    setCardFormat(e.target.value as string)
  }

  const trigger = useScrollTrigger({
    target: window ? window : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  return (
    <>
      <Title text='raquetes' />



      <Stack sx={{ position: 'relative' }} >

        <Slide direction='right' in={trigger}>
          <Box sx={{ position: 'absolute', top: 78, left: { xs: -4, md: -30, lg: -30 }, widht: '100%', height: '100%' }} >
            <Sticky top={'25%'} index={200}>
              <ToggleCardFormat
                size='small'
                bgcolor='#00aa000f'
                orientation='vertical'
                buttons={[{ label: 'promo', icone: <FaMoneyBillWave color='green' fontSize={32} /> }]}
              />

            </Sticky>
          </Box>
        </Slide>

        <Grid
          container
          justifyContent='center'
          rowSpacing={{ xs: 1, md: 2, lg: 2 }}
          columnSpacing={{ xs: 1, md: 2, lg: 2 }}
        >
          <Grid item container xs={1} />
          <Grid item container xs={12} rowSpacing={1} columnSpacing={.5}>
            <Grid item xs={3} md={2}>
              <Filter label='marca' value={marcaValue} setValue={setMarcaValue} itensToFilter={marcas} />
            </Grid>
            <Grid item xs={3} md={4}>
              <Filter label='material' value={materialValue} setValue={setMaterialValue} itensToFilter={materiais} />
            </Grid>
            <Grid item xs={3} md={4}>
              <Filter label='cor' value={corValue} setValue={setCorValue} itensToFilter={cores} />
            </Grid>
            <Grid item xs={3} md={2}>
              <Filter label='preço' value={precoValue} setValue={setPrecoValue} itensToFilter={precos} />

            </Grid>
            <Grid item container xs={1} />
            <Grid item xs={12}>
              <ToggleCardFormat bgcolor='transparent' handleChange={handleChange} cardFormat={cardFormat} buttons={[
                {
                  label: 'default',
                  icone: <MdDashboard fontSize={22} />
                },
                {
                  label: 'list',
                  icone: <MdFormatListBulleted fontSize={22} />
                }
              ]
              } />
            </Grid>

          </Grid>

          {
            Data.map(
              (
                item,
                index
              ) => (

                <Grid
                  key={index}
                  item
                  container
                  justifyContent='center'
                  alignItems='center'
                  xs={11}
                  md={4}
                  lg={4}
                >

                  <CardRaquetes
                    animated={false}
                    raquete={item}
                    cardFormat={cardFormat}

                  />
                </Grid>
              ))

          }
        </Grid>
      </Stack>
    </>
  )
}