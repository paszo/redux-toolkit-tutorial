import {configureStore, combineReducers, getDefaultMiddleware} from "@redux-js/toolkit";
import counterSlice from "./CounterSlice";
import testSlice from "./TestSlice";

const reducer = combineReducers({
    counter: counterSlice,
    test: testSlice
})

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({thunk: false})]
})

export default store;