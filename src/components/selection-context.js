import React, {useContext, useReducer} from "react";

const SelectionContext = React.createContext();

const init = () => {return {selected: []}};

const initialState = {selected:[]};

const selectionReducer = (state, action) => {
    switch (action.type) {
        case true: {
            return state.selected.concat([action.payload])
        }
        case false: {
            return {selected: state.selected.filter((e) => e.id !== action.payload.id)}
        }
        default: {
            throw new Error(`unhandled action type: ${action.type}`)
        }
    }
}

const SelectionProvider = ({children}) => {
    const [state, dispatch] = useReducer(selectionReducer, initialState, init)
    return (
        <SelectionContext.Provider value={state}>
            <SelectionContext.Provider value={dispatch}>
                {children}
            </SelectionContext.Provider>
        </SelectionContext.Provider>
    )
}

const useSelectionState = () => {
    const context = useContext(SelectionContext);
    if(context === undefined) {
        throw new Error('useSelectionState must be used within a SelectionProvider')
    }
    return context;
}

const useSelectionDispatch = () => {
    const context = useContext(SelectionContext);
    if(context === undefined) {
        throw new Error('useSelectionState must be used within a SelectionProvider')
    }
    return context;
}

export {SelectionProvider, useSelectionDispatch, useSelectionState};
