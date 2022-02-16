import { GET_CHARACTER } from "../types";
import Axios from '../config/Axios'

export function getCharacter(find, especie, status, next) {
    return async(dispatch) => {
        try {
            const response = await Axios.get(`character/?name=${find}&species=${especie}&status=${status}&page=${next}`)
            dispatch(getCharacters(response.data.results))
        } catch (error) {
            console.log(error)
        }
    }
}

const getCharacters = (response) => ({
    type:GET_CHARACTER,
    payload:response
})
