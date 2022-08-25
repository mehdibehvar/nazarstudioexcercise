import { createContext, useReducer } from "react";

export const Store=createContext();
const initialState={
    mode:"light"
}
const reducer=(state,action)=>{
switch (action.type) {
    case "toggle_mode":
        
        return {
            ...state,
            mode:state.mode==="light"?"dark":"light"
        }

    default:
        return state;
}
}
export default function StoreProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState) ;
    const value={state,dispatch}
    return <Store.Provider value={value}>
        {children}
    </Store.Provider>
}