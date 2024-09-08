import axios from 'axios';

//chave da API
const API_KEY = '1780437b588426eec38aa0030ad50561'

//configurando o axios
const apiFootball = axios.create({
  baseURL:  'https://v3.football.api-sports.io/',
  headers: {
    'x-apisports-key': API_KEY
  }
})

export default apiFootball;
