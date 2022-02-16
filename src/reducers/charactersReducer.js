import { GET_CHARACTER, NEXT_PAGE, PREV_PAGE } from "../types";

//Cada reducer tiene su propio state
const initialState = ({
    character:[],
})

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CHARACTER:
            return {
                ...state,
                character:action.payload
            }
        default:
            return state
    }
}