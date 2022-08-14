import { FormControl, InputLabel, Select, Toolbar } from "@mui/material"
import { Dispatch, SetStateAction, useEffect } from "react"
import { matchProductsByBrands } from "../../Utils"
import { Sticky } from "../../styles"
import { IRaquete } from "../../Types"
import { useProdutosContext } from "../../Common/Context/Produtos"

interface Prop {
    setItemComparative: Dispatch<SetStateAction<string>>
    itemComparative: string
    raquetes: IRaquete[]
    id: string
}

export const SelectItemToCompare = (prop: Prop) => {
    const { raquetes, id, itemComparative, setItemComparative } = prop
    const { produtos} = useProdutosContext()

    const handleComparative = (value: string) => {
        return setItemComparative(value)
    }
    const marcas = raquetes.map(raquete => raquete.role.category).filter((elem, pos, self) => self.indexOf(elem) == pos)         
    

    return (
        <FormControl variant="outlined" sx={{ width: '100%', borderRadius: '.32rem', bgcolor: 'white'}}>
            
            <InputLabel htmlFor={id} >escolha</InputLabel>
            <Select sx={{  borderRadius: '.32rem', bgcolor: 'white', boxShadow: '0px 1px 12px #f5f5f7'}} size="small" onChange={(e) => handleComparative(e.target.value)} native defaultValue='' id={id} label='raquete'
            >
                <option aria-label="None" value={itemComparative} />
                {
                    marcas.map(opt => (
                        <optgroup  label={opt}>
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
