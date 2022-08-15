import { Grid, Stack, Box, OutlinedInput, Chip, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, ToggleButtonGroup, ToggleButton } from "@mui/material"
import { Data } from "../../../assets/data"
import { Dispatch, FormEvent, SetStateAction, } from "react"
import { MdFormatListBulleted, MdOutlineDashboard } from "react-icons/md"
import { useGlobalContext } from "../../../Common/Context/GlobalConfig"


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
    handleChange?: (e: any)=>void
}

export const ToggleCardFormat = () => {         
    const { configurar, cardFormat, setCardFormat} = useGlobalContext()
    const handleConfig = ( e?:any) => {
        configurar({'cardFormat': e.target.value })
        setCardFormat(e.target.value)
    }
    return (
        <ToggleButtonGroup
            value={cardFormat}
            exclusive
            size='small'
            onChange={handleConfig}
            fullWidth
            orientation="horizontal"
        >
            <ToggleButton  value='default' sx={{ border: '2px solid transparent', '&.Mui-selected, &.Mui-selected:hover': {
                boxShadow: '0px 12px 8px -20px #111111',
            }}}>
                <MdOutlineDashboard  fontSize={22} />
            </ToggleButton>
            <ToggleButton  value='list' sx={{ border: '2px solid transparent', '&.Mui-selected, &.Mui-selected:hover': {
                boxShadow: '0px 12px 8px -20px #111111',
            }}}>
                <MdFormatListBulleted   fontSize={22} />
            </ToggleButton>


        </ToggleButtonGroup>
    )
}