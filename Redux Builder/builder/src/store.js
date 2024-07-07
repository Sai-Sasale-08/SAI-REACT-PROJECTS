import {  combineReducers,  legacy_createStore } from "redux";
import {reducer as CounterReducer} from "../src/Counter/reducer";
import {reducer as ThemeReducer} from "../src/Theme/reducer"
const rootReducer = combineReducers({
    CounterReducer,
    ThemeReducer
})
export const store = legacy_createStore(rootReducer);