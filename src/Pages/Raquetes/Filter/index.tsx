import { Grid, Stack, Box, OutlinedInput, Chip, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, ToggleButtonGroup, ToggleButton } from "@mui/material"
import { Data } from "../../../assets/data"
import { Dispatch, SetStateAction, useState, VoidFunctionComponent } from "react"
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
                    itensToFilter?.map((item: string, index) => (
                        <MenuItem key={index} value={item}>{item}</MenuItem>
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
        >
            <ToggleButton value='default' sx={{marginLeft: '-.4rem', border: '2px solid transparent', '&.Mui-selected, &.Mui-selected:hover': {
                boxShadow: '0px 12px 8px -20px #111111',
                borderRadius: '0 1rem 0 0',
                marginLeft: '0rem'
            }}}>
                <MdOutlineDashboard  style={{margin:6}}  fontSize={22} />
            </ToggleButton>
            <ToggleButton value='list' sx={{marginLeft: '-.4rem', border: '2px solid transparent', '&.Mui-selected, &.Mui-selected:hover': {
                boxShadow: '0px 12px 8px -20px #111111',
                borderRadius: '0 0 1rem 0',
                marginLeft: '0rem'
                

            }}}>
                <MdFormatListBulleted style={{margin:6}} fontSize={22} />
            </ToggleButton>


        </ToggleButtonGroup>
    )
}