import { FormControl, InputLabel, Select, Toolbar } from "@mui/material"
import { Dispatch, SetStateAction, useEffect } from "react"
import { Sticky } from "../../styles"

interface Prop {
    setItemComparative: Dispatch<SetStateAction<string>>
    itemComparative: string
    raquetes: IRaquete[]
    id: string
}

export interface IRaquete {
    id: number;
    img: any;
    title: string;
    subtitle: string;
    price: {
        original: number;
        sale: number;
    };
    chips: string[],
    year: string
    stored: number;
    description: string;
    subDescription: string;
    weight: number;
    dimensions: number[];
    color: string[];
    material: string;
    role: {
        category: string
        brand: any
    }
}
export const SelectItemToCompare = (prop: Prop) => {
    const { raquetes, id, itemComparative, setItemComparative } = prop

    function handleComparative(value: string) {
        return setItemComparative(value)

    }

    return (
        <FormControl variant="outlined" sx={{ width: '100%', pl:.2, pr: .2}}>
            <InputLabel htmlFor={id} >escolha</InputLabel>
            <Select sx={{p:.5 }} size="small" onChange={(e) => handleComparative(e.target.value)} native defaultValue='' id={id} label='raquete'
            >
                <option aria-label="None" value={itemComparative} />
                <optgroup label={id}>
                    {
                        raquetes?.map((item, index) => (
                            <option key={index} value={item?.title}>{item?.title}</option>

                        ))
                    }
                </optgroup>
            </Select>
        </FormControl>
    )
}
