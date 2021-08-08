import { combineReducers } from "redux";
import { apiReducer } from "./reducers";

export const rootReducer = combineReducers({
    apiReducer: apiReducer,
});

