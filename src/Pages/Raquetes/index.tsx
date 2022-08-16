import { Grid, Stack, Box, Slide, useScrollTrigger } from "@mui/material"
import { Data } from "../../assets/data"
import { CardRaquetes } from '../../components/Cards'
import { Title, TitleCentred } from "../../components/Title"
import { useEffect, useState } from "react"
import { Filter, ToggleCardFormat } from "./Filter"
import { Sticky } from "../../styles"
import { MdDashboard, MdFormatListBulleted } from "react-icons/md"
import { FaMoneyBillWave } from 'react-icons/fa'
import { marcas, materiais, cores, precos } from "../../assets/data/FormatData"
import { IRaquete } from "../../Types"
import { FormatPrice } from "../../Utils"
export const RaquetesPage = () => {
  const [value, setValue] = useState('')
  const [marcaValue, setMarcaValue] = useState('')
  const [materialValue, setMaterialValue] = useState('')
  const [corValue, setCorValue] = useState('')
  const [precoValue, setPrecoValue] = useState('')
  const [cardFormat, setCardFormat] = useState<string>('default')
  const handleChange = (e: any) => {
    setCardFormat(e.target.value as string)
  }

  const trigger = useScrollTrigger({
    target: window ? window : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const produtos = Data?.map(item => item)
  const [arraySelected, setArraySelected] = useState<IRaquete[]>(produtos)

  
  
  
  useEffect(() => {
    let selectedMarca = Data.filter(function (item) {
  
      let arrayFinal 

      
      item.role.category === value 
      ? arrayFinal = item
      : item.material[0] === value || item.material[1]=== value 
      ? arrayFinal = item
      : item.color[0] === value || item.color[1]=== value || item.color[2]=== value
      ? arrayFinal = item
      : (FormatPrice(item.price.sale) === value)
      ? arrayFinal = item
      : value === '' 
      ? arrayFinal = item : ''
      return arrayFinal
    })
    
    setArraySelected(selectedMarca)
    console.log(precoValue);
    
  }, [marcaValue, materialValue, corValue, precoValue])




  return (
    <>
      <Title text='raquetes' />
      <Stack sx={{ position: 'relative' }} >

        <Slide direction='right' in={trigger}>
          <Box sx={{
            position: 'absolute',
            top: 78,
            left: {
              xs: -4,
              md: -30,
              lg: -30
            },
            widht: '100%',
            height: '100%'
          }} >
            <Sticky top={'25%'} index={200}>
              <ToggleCardFormat
                size='small'
                bgcolor='#00aa000f'
                orientation='vertical'
                buttons={[{
                  label: 'promo',
                  icone: <FaMoneyBillWave
                    color='green'
                    fontSize={32} />
                }]}
              />
            </Sticky>
          </Box>
        </Slide>

        <Grid
          container
          justifyContent='center'
          rowSpacing={{
            xs: 1,
            md: 2,
            lg: 2
          }}
          columnSpacing={{
            xs: 1,
            md: 2,
            lg: 2
          }}
        >
          <Grid
            item
            container
            xs={1} />
          <Grid
            item
            container
            xs={12}
            rowSpacing={1}
            columnSpacing={.5}>

            <Grid
              item
              xs={3}
              md={2}>
              <Filter
                setGlobalValue={setValue}
                globalValue={value}
                label='marca'
                value={marcaValue}
                setValue={setMarcaValue}
                itensToFilter={marcas}
              />
            </Grid>

            <Grid
              item
              xs={3}
              md={4}>
              <Filter
                setGlobalValue={setValue}
                globalValue={value}
                label='material'
                value={materialValue}
                setValue={setMaterialValue}
                itensToFilter={materiais}
              />
            </Grid>

            <Grid
              item
              xs={3}
              md={4}>
              <Filter
                setGlobalValue={setValue}
                globalValue={value}
                label='cor'
                value={corValue}
                setValue={setCorValue}
                itensToFilter={cores}
              />
            </Grid>

            <Grid
              item
              xs={3}
              md={2}>
              <Filter
                setGlobalValue={setValue}
                globalValue={value}
                label='preço'
                value={precoValue}
                setValue={setPrecoValue}
                itensToFilter={precos} />
            </Grid>

            <Grid
              item
              container
              xs={1}
            />
            <Grid
              item
              xs={12}
            >
              <ToggleCardFormat
                bgcolor='transparent'
                handleChange={handleChange}
                cardFormat={cardFormat} buttons={[
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
            arraySelected.map((item, index) => (
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

          {/* {
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
          } */}
        </Grid>
      </Stack>
    </>
  )
}
