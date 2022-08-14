import { Grid, Stack, Box, OutlinedInput, Chip, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material"
import { Data } from "../../../assets/data"
import { Dispatch, SetStateAction, useState } from "react"
import { useProdutosContext } from "../../../Common/Context/Produtos"


interface Props { 
    value: string 
    setValue: Dispatch<SetStateAction<string>>
    itensToFilter: string[]
    label: string
}
export const Filter = (props: Props) => {
    const { value, setValue, itensToFilter, label } = props


    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };
    return (
        <FormControl fullWidth >
            <InputLabel id={`select-label-${label}`}>{label}</InputLabel>
            <Select
                labelId={`select-${label}`}
                id={`select-${label}`}
                value={value}
                label={label}
                onChange={handleChange}
            >
                {
                    itensToFilter?.map((item: string) => (
                        <MenuItem value={item}>{item}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}