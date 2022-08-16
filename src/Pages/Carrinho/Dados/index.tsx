import { Box, Button, FormControl, FormHelperText, Grid, OutlinedInput, Stack, Typography, useFormControl } from "@mui/material"
import { useCarrinhoContext } from "../../../Common/Context/Carinho";
import { useMemo, useState } from "react"
import { IDadosPessoais, usePerfilContext } from "../../../Common/Context/DadosPessoais";
import { Title } from "../../../components/Title"
import { MdSearch } from "react-icons/md";



// inpute Helper
const MyFormHelperText = ({ helperFocused, helper }: { helperFocused?: string, helper?: string }) => {
    const { focused } = useFormControl() || {};

    const helperText = useMemo(() => {
        if (focused) {
            return helperFocused
        };
        return helper || ''
    }, [focused])
    return <FormHelperText>{helperText}</FormHelperText>
}



export const MyInput = ({ label, helperFocused, helper, readOnly, register, value }: { label: string, helperFocused?: string, helper?: string, readOnly: boolean, register: any, value?: string }) => {
    const { setPerfil, perfil, adicionaDadosAoPerfil, handleSubmit, onSubmit, consultaCep } = usePerfilContext()

    return (
        <FormControl sx={{ width: '100%' }}>
            <OutlinedInput inputProps={{
                readOnly: readOnly,
            }}
                {...register(label)}
                label={label}
                fullWidth
                value={value}
                placeholder={label}
                
            />
            <MyFormHelperText helperFocused={helperFocused} helper={helper} />
        </FormControl>
    )
}


export const FormularioCarrinho = () => {
    const { register, handleSubmit, onSubmit, perfil, consultaCep } = usePerfilContext()
    const { carrinho } = useCarrinhoContext()

    let text
    carrinho.map(item => {
        text = `
        ${item.title} \n
        -------------- 
        ${item.quantity}
        
        `

        return text
    })

    const link = `https://wa.me/5534992118568?text=${text}`
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Title text='dados pessoais' />
            <Stack spacing={.8} >
                <MyInput register={register} readOnly={false} helperFocused='insira seu nome' label='nome' helper=' ' />
                <MyInput register={register} readOnly={false} helperFocused='insira seu último sobrenome' label='sobrenome' helper=' ' />
                <MyInput register={register} readOnly={false} helperFocused='insira seu telefone' label='telefone' helper='(00) 0.0000-0000' />
                
                <FormControl sx={{ width: '100%' }}>
                    <OutlinedInput
                        {...register('cep')}
                        label='cep'
                        fullWidth
                        placeholder='cep'
                        onChange={(e: any)=>consultaCep(`${e.target.value}`)}
                        endAdornment={
                            <Button>
                                <MdSearch />
                            </Button>
                        }
                    />
                    <MyFormHelperText helperFocused='insira seu cep' helper='00.000-000' />
                </FormControl>
            </Stack>

            <Title text='endereço' />

            <Grid container columnSpacing={2} >
                <Grid item xs={6}>
                    <MyInput value={perfil.rua} register={register} readOnly={false} helperFocused='rua' label='rua' helper=' ' />
                </Grid>
                <Grid item xs={6}>
                    <MyInput value={perfil.bairro} register={register} readOnly={false} helperFocused='bairro' label='bairro' helper=' ' />
                </Grid>
                <Grid item xs={6}>
                    <MyInput value={perfil.cidade} register={register} readOnly={false} helperFocused='cidade' label='cidade' helper=' ' />
                </Grid>
                <Grid item xs={6}>
                    <MyInput value={perfil.estado} register={register} readOnly={false} helperFocused='estado' label='estado' helper=' ' />
                </Grid>
            </Grid>

            <Box sx={{ bgcolor: 'transparent', width: '100%', height: 75 }}>

                <Button href={link} type='submit' sx={{ p: 3.2, width: '100%', borderRadius: 0 }}>
                    <Typography>finalizar pedido</Typography>
                </Button>
            </Box>
        </form>
    )
}