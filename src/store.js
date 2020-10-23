import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const initialState = {
    saved: [],
    results: [],
    searchParams: ''
};

export default createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
