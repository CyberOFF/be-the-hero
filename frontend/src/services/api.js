//Todo tipo de atquivo que vai prover a conexao com servico externo

import axios from 'axios'

const api = axios.create({
  baseURL:"http://localhost:3333/"
})

export default api ;