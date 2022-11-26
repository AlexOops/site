import {combineReducers, createStore} from "redux";
import {protocolsReducer} from "./protocolsReducer/protocolsReducer";
import {formsReducer} from "./formsReducer/formsReducer";

export const reducer = combineReducers({
    protocols: protocolsReducer,
    forms: formsReducer
})

export const store = createStore(reducer);
