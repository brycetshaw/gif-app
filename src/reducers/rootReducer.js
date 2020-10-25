// import {API} from "@aws-amplify/api";
import * as R from 'ramda';

const initialState = {
    saved: [],
};

//Types
export const GIF_ADD = 'GIF_ADD';
export const GIF_REMOVE = 'GIF_REMOVE';
export const API_UPDATE = 'API_UPDATE';
export const RESULTS_SET = 'RESULTS_SET';

//Actions
export const addSavedAction = (val) => ({ type: GIF_ADD, payload: val });
export const removeSavedAction = (val) => ({
    type: GIF_REMOVE,
    payload: val.key,
});
export const setResultsAction = (val) => ({ type: RESULTS_SET, payload: val });

export const addAPIStateAction = (val) => ({ type: API_UPDATE, payload: val });

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GIF_ADD: {
            return {
                ...state,
                saved: R.concat(state.saved, [payload]),
            };
        }
        case GIF_REMOVE: {
            return {
                ...state,
                saved: R.filter((gif) => gif.key !== payload, state.saved),
            };
        }
        case RESULTS_SET: {
            return {
                ...state,
                results: payload.results,
                searchParams: payload.searchParams,
            };
        }
        case API_UPDATE: {
            return {
                ...state,
                saved: R.union(state.saved, payload),
            };
        }
        default:
            return state;
    }
};

export default reducer;
