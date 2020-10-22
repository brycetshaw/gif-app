const initialState = {
    saved: []
}

//Types
export const GIF_ADD = 'GIF_ADD'
export const GIF_REMOVE = 'GIF_REMOVE'


//Actions
export const addSavedAction = (val) => ({type:GIF_ADD, payload:val})
export const removeSavedAction = (val) => ({type:GIF_REMOVE, payload:val.key})

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GIF_ADD: {
            return {
                ...state,
                saved: [...state.saved, payload ]
            }
        }
        case GIF_REMOVE: {
            return {
                ...state,
                saved: state.saved.filter((gif) => gif.key !== payload)
            }
        }
        default:
            return state;
    }
}

export default reducer;
