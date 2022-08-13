import { Button, FormControl, FormHelperText, Grid, OutlinedInput, Stack, Typography, useFormControl } from "@mui/material"
import { useMemo, useState } from "react"
import { IDadosPessoais, usePerfilContext } from "../../../Common/Context/DadosPessoais";



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



const MyInput = ({ label, helperFocused, helper, readOnly }: { label: string, helperFocused?: string, helper?: string, readOnly: boolean }) => {
    const { setPerfil, perfil, adicionaDadosAoPerfil, register, handleSubmit, onSubmit } = usePerfilContext()

    
    return (
        <FormControl sx={{ width: '100%' }}>
            <OutlinedInput inputProps={{
                readOnly: readOnly,
            }}
                onChange={(e)=>adicionaDadosAoPerfil(label, e.target.value)}
                fullWidth
                placeholder={label}
            />
            {perfil.nome}
            <MyFormHelperText helperFocused={helperFocused} helper={helper} />
        </FormControl>
    )
}

export const FormularioDados = () => {
    const { setPerfil, perfil, adicionaDadosAoPerfil, register, handleSubmit, onSubmit } = usePerfilContext()

    return (
        <Stack spacing={.8} >

            <MyInput readOnly={false} helperFocused='insira seu nome' label='nome' helper=' ' />
            <MyInput readOnly={false} helperFocused='insira seu último sobrenome' label='sobrenome' helper=' ' />
            <MyInput readOnly={false} helperFocused='insira seu telefone' label='telefone' helper='(00) 0.0000-0000' />
            <MyInput readOnly={false} helperFocused='insira seu cep' label='cep' helper='00.000-000' />
                
        </Stack>
    )
}

export const AdressForm = () => {
    return (
        <Grid container columnSpacing={2} >
            <Grid item xs={6}>

                <MyInput readOnly={false} helperFocused='rua' label='rua' helper=' ' />
            </Grid>
            <Grid item xs={6}>
                <MyInput readOnly={false} helperFocused='bairro' label='bairro' helper=' ' />

            </Grid>
            <Grid item xs={6}>

                <MyInput readOnly={false} helperFocused='cidade' label='cidade' helper=' ' />
            </Grid>
            <Grid item xs={6}>

                <MyInput readOnly={false} helperFocused='estado' label='estado' helper=' ' />
            </Grid>

        </Grid>
    )
}