import { consultarCep } from 'correios-brasil'
import { FormControl, InputLabel, Input, OutlinedInput, OutlinedInputProps, InputProps, InputBaseComponentProps } from '@mui/material'
import InputMask from 'react-input-mask'
import { Dispatch, forwardRef, ReactNode, SetStateAction, useState } from 'react';
interface Props {
    value: string
    setValue: Dispatch<SetStateAction<string>>
}

interface CustomProps {
    onChange?: (event: { target: { name: string; value: string } }) => void;
    name: string;
  }

const MyMask=  (
    function TextMaskCustom() {
        return <InputMask placeholder='cep' style={{ border: 'none', outline: 'none', padding: '1.1rem', width: '100%' }} maskChar="" mask=" 999.999-99" />
    }
)


export const Address = () => {
    const [value, setValue] = useState('')

    return (
        <>
            <FormControl variant="standard">
                <OutlinedInput placeholder='cep' inputComponent={MyMask} value={value} onChange={(e) => setValue(e.target.value)} />
            </FormControl>

        </>
    )
}