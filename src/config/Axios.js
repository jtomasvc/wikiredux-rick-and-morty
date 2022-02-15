import axios from 'axios'

const ApiRick = axios.create({
    baseURL:'https://rickandmortyapi.com/api/'
})

export default ApiRick