import { Data } from "."
import {FormatPrice} from '../../Utils'

const marcas = Data.map(raquete => raquete.role.category).filter((elem, pos, self) => self.indexOf(elem) == pos)
const material1 = Data.map(raquete => raquete.material[0])
const material2 = Data.map(raquete => raquete.material[1])
const materiais = [...material1, ...material2].filter((elem, pos, self) => self.indexOf(elem) == pos).filter(i => i)
const precos = Data.map(raquete => FormatPrice(raquete.price.sale)).filter((elem, pos, self) => self.indexOf(elem) == pos).filter(i => i)
const cor1 = Data.map(raquete => raquete.color[1])
const cor2 = Data.map(raquete => raquete.color[2])
const cor3 = Data.map(raquete => raquete.color[3])
const cores = [...cor1, ...cor2, ...cor3].filter((elem, pos, self) => self.indexOf(elem) == pos).filter(i => i)


export {
    marcas,
    materiais,
    precos,
    cores
}