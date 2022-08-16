import Axios from 'axios';

export  const ApiCep = {
  SearchCep(cep: string) {
    return Axios.get(`https://viacep.com.br/ws/${cep}/json`);
  }
}

