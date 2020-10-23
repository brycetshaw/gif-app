import {API} from "@aws-amplify/api";
import * as R from 'ramda';
const initialState = {
    saved: []
}

//Types
export const GIF_ADD = 'GIF_ADD'
export const GIF_REMOVE = 'GIF_REMOVE'
export const API_UPDATE = 'API_UPDATE'


//Actions
export const addSavedAction = (val) => ({type:GIF_ADD, payload:val})
export const removeSavedAction = (val) => ({type:GIF_REMOVE, payload:val.key})
export const addAPIStateAction = (val) => ({type:API_UPDATE, payload: val})

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GIF_ADD: {
            // API.graphql(graph)
            return {
                ...state,
                saved: R.concat(state.saved, [payload])
            }
        }
        case GIF_REMOVE: {
            return {
                ...state,
                saved: R.filter((gif) => gif.key !== payload, state.saved)
            }
        }
        case API_UPDATE: {
            return {
                ...state,
                saved: R.union(state.saved, payload)
            }
        }
        default:
            return state;
    }
}

export default reducer;
