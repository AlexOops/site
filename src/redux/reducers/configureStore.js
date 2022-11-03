import {combineReducers, createStore} from "redux";
import {protocolsReducer} from "./protocolsReducer/protocolsReducer";

export const reducer = combineReducers({
    protocols: protocolsReducer
})

export const store = createStore(reducer);
