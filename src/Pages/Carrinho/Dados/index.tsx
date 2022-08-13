import { FormControl, FormHelperText, Input, InputBase, InputLabel, OutlinedInput, Stack, TextField, useFormControl } from "@mui/material"
import { useEffect, useMemo, useState } from "react"
import { Sticky } from "../../../styles";
import InputMask from 'react-input-mask'


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


// mask input

export const MyMaskInput = ({ label, helperFocused, helper, mask }: { label?: string, helperFocused?: string, helper?: string, mask: string }) => {
    const MyMask = (
        function TextMaskCustom() {
            return <InputMask  placeholder={label} style={{ border: 'none', outline: 'none', padding: '1.1rem', width: '100%', fontSize: 16 }} maskChar=' ' mask={mask} />
        }
    )
    const [value, setValue] = useState('')

    return (
        <FormControl >
            <OutlinedInput  inputComponent={MyMask} value={value} onChange={(e) => setValue(e.target.value)} />
            <MyFormHelperText helperFocused={helperFocused} helper={helper} />
        </FormControl>
    )
}

// input basic

const MyInput = ({ label, helperFocused, helper }: { label?: string, helperFocused?: string, helper?: string }) => {

    return (
        <FormControl sx={{ width: '100%' }}>
            <OutlinedInput sx={{ minWidth: 100, maxWidth: 1200 }} placeholder={label} />
            <MyFormHelperText helperFocused={helperFocused} helper={helper} />
        </FormControl>
    )
}

export const FormularioDados = () => {
    return (
        <Stack spacing={{ xs: 0, md: 1.6, lg: 1.6 }}>
            <MyInput helperFocused='insira seu nome completo' label='nome completo' helper=' ' />
            <MyInput helperFocused='(34) 9.1234-5678' label='telefone' helper=' ' />
            <MyMaskInput helperFocused='(34) 9.1234-5678' label='telefone' mask=" +5\5 9.9999-9999"  helper=' ' />
            <MyMaskInput helperFocused='aaaaaaaaa' label='cep' mask=" 999.999-99"  helper=' ' />
        </Stack>
    )
}