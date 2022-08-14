import { Grid, Stack, Box, OutlinedInput, Chip, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, ToggleButtonGroup, ToggleButton } from "@mui/material"
import { Data } from "../../../assets/data"
import { Dispatch, SetStateAction, useState, VoidFunctionComponent } from "react"
import { useProdutosContext } from "../../../Common/Context/Produtos"
import { MdFormatListBulleted, MdOutlineDashboard } from "react-icons/md"


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

interface IToggle {
    cardFormat: string 
    handleChange: (e: any)=>void
}

export const ToggleCardFormat = (prop: IToggle) => {         
    const {handleChange, cardFormat} = prop
    return (
        <ToggleButtonGroup
            value={cardFormat}
            exclusive
            size='large'
            onChange={handleChange}
            fullWidth
            orientation="vertical"
            sx={{flexDirection: 'column'}}
        >
            <ToggleButton value='default' sx={{ border: '2px solid transparent', '&.Mui-selected, &.Mui-selected:hover': {
                background: 'rgba(232, 245, 255, 0.07)',
                backdropFilter: 'blur(32px)',
                boxShadow: '0px 12px 8px -20px #111111',
            }}}>
                <MdOutlineDashboard />
            </ToggleButton>
            <ToggleButton value='list' sx={{ border: '2px solid transparent', '&.Mui-selected, &.Mui-selected:hover': {
                background: 'rgba(232, 245, 255, 0.07)',
                backdropFilter: 'blur(32px)',
                boxShadow: '0px 12px 8px -20px #111111',

            }}}>
                <MdFormatListBulleted />
            </ToggleButton>


        </ToggleButtonGroup>
    )
}