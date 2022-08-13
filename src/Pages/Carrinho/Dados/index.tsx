import { FormControl, FormHelperText, Input, InputBase, InputLabel, OutlinedInput, Stack, TextField, useFormControl } from "@mui/material"
import { useEffect, useMemo } from "react"
import { Sticky } from "../../../styles";



const MyInput = ({ label, helperFocused, helper }: { label?: string, helperFocused?: string, helper?: string }) => {
    const MyFormHelperText = () => {
        const { focused } = useFormControl() || {};

        const helperText = useMemo(() => {
            if (focused) {
                return helperFocused
            };
            return helper || ''
        }, [focused])
        return <FormHelperText>{helperText}</FormHelperText>
    }

    return (
        <FormControl>
            <OutlinedInput sx={{ minWidth: '16rem' }} placeholder={label} />
            <MyFormHelperText />
        </FormControl>
    )
}

export const FormularioDados = () => {
    return (
        <>
            <Stack spacing={{xs: 0, md: 1.6, lg: 1.6}}>
                <MyInput helperFocused='insira seu nome completo' label='nome completo' helper=' ' />
                <MyInput helperFocused='(34) 9.1234-5678' label='telefone' helper=' ' />
            </Stack>
        </>
    )
}