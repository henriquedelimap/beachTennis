import { FormControl, InputLabel, Select, Toolbar } from "@mui/material"
import { Dispatch, SetStateAction, useEffect } from "react"
import { matchProductsByBrands } from "../../Utils"
import { Sticky } from "../../styles"
import { IRaquete } from "../../Types"

interface Prop {
    setItemComparative: Dispatch<SetStateAction<string>>
    itemComparative: string
    raquetes: IRaquete[]
    id: string
}


export const SelectItemToCompare = (prop: Prop) => {
    const { raquetes, id, itemComparative, setItemComparative } = prop

    const handleComparative = (value: string) => {
        return setItemComparative(value)
    }
    const optConfig = raquetes.map(raquete => raquete.role.category).filter((elem, pos, self) => self.indexOf(elem) == pos)
    console.log(optConfig);

         

    return (
        <FormControl variant="outlined" sx={{ width: '100%', pl: .4, pr: .4 }}>
            
            <InputLabel htmlFor={id} >escolha</InputLabel>
            <Select sx={{ p: .5 }} size="small" onChange={(e) => handleComparative(e.target.value)} native defaultValue='' id={id} label='raquete'
            >
                <option aria-label="None" value={itemComparative} />
                {
                    optConfig.map(opt => (
                        <optgroup label={opt}>
                            {
                                matchProductsByBrands(opt, raquetes).map((raquete, index) => (
                                    <option key={index} value={raquete}>{raquete}</option>
                                ))
                            }
                        </optgroup>
                    ))
                }
            </Select>
        </FormControl>
    )
}
