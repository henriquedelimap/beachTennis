// import { ChangeEvent, useState } from "react";
// import { ApiCep } from "./Services";

// export const BuscaCep = () => {
//     const [state, setState] = useState({
//         rua: '',
//         bairro: '',
//         cidade: '',
//         estado: ''
//     })
//     function handleDados(cep: string) {

//         ApiCep.SearchCep(cep).then((res) => {
//             let rua = res.data.logradouro;
//             let bairro = res.data.bairro;
//             let cidade = res.data.localidade;
//             let estado = res.data.uf;

//             setState({
//                 rua: rua
//                 , bairro: bairro
//                 , cidade: cidade
//                 , estado: estado
//             })
//         })
//     }

//     return (
//         <div>
//             <form className="container box is-3">
//                 <label className="label">Cep</label>
//                 <p className="control">
//                     <input type="text" className="input is-6" onChange={(e)=>handleDados( e.target.value)} placeholder="Cep..." />
//                 </p>

//                 <label className="label">Endereço</label>
//                 <p className="control">
//                     <input type="text" className="input is-6" value={state.rua} disabled />
//                 </p>

//                 <label className="label">Número</label>
//                 <p className="control">
//                     <input type="number" className="input is-6" />
//                 </p>

//                 <label className="label">Bairro</label>
//                 <p className="control">
//                     <input type="text" className="input is-6" value={state.bairro} disabled />
//                 </p>

//                 <label className="label">Cidade</label>
//                 <p className="control">
//                     <input type="text" className="input is-6" value={state.cidade} disabled />
//                 </p>

//                 <label className="label">UF</label>
//                 <p className="control">
//                     <input type="text" className="input is-6" value={state.estado} disabled />
//                 </p>
//             </form>
//         </div>
//     )
// }