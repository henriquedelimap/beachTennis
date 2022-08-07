import { FormControl, InputLabel, Select } from "@mui/material"
import { Dispatch, SetStateAction, useEffect } from "react"

interface Prop {
    setItemComparative?: Dispatch<SetStateAction<string>>
    itemComparative?: string
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

    useEffect(() => {
        console.log(itemComparative);

    }, [handleComparative, setItemComparative])
    return (
        <FormControl sx={{ width: '100%' }}>
            <InputLabel htmlFor={id}>raquete</InputLabel>
            <Select onChange={(e) => handleComparative(e.target.value)} native defaultValue='' id={id} label='raquete'>
                <option aria-label="None" value={itemComparative} />
                <optgroup label={id}>
                    {
                        raquetes?.map(item => (
                            <option value={item?.title}>{item?.title}</option>

                        ))
                    }
                </optgroup>
            </Select>
        </FormControl>
    )
}