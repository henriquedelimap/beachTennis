import { Grid, Stack, Box, OutlinedInput, Chip, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, ToggleButtonGroup, ToggleButton, iconClasses } from "@mui/material"
import { Data } from "../../../assets/data"
import { Dispatch, FormEvent, ReactNode, SetStateAction, } from "react"
import { MdFormatListBulleted, MdOutlineDashboard } from "react-icons/md"
import { useGlobalContext } from "../../../Common/Context/GlobalConfig"
import { IconType } from "react-icons"


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
    cardFormat?: string
    handleChange?: (e: any) => void
    size?: "small" | "medium" | "large" | undefined
    orientation?: "horizontal" | "vertical" | undefined
    buttons: IButton[]
}
interface IButton {
    icone: any
    label: string
}
export const ToggleCardFormat = (prop: IToggle) => {
    const { handleChange, cardFormat, size, orientation, buttons } = prop

    const orient = orientation === undefined ? 'horizontal' : orientation
    const tamanho = size === undefined ? 'small' : size

    return (
        <ToggleButtonGroup
            value={cardFormat}
            exclusive
            size={tamanho}
            onChange={handleChange}
            fullWidth
            orientation={orient}
        >{
                buttons?.map(({label, icone}: IButton) => (
                    <ToggleButton value={label} sx={{
                        border: '2px solid transparent', '&.Mui-selected, &.Mui-selected:hover': {
                            boxShadow: '0px 12px 8px -20px #111111',
                        }
                    }}>
                        {icone}
                    </ToggleButton>

                ))
            }
        


        </ToggleButtonGroup>
    )
}