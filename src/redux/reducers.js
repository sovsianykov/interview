import {DELETE_lIST, FETCH_LISTS, FETCH_START, POST_LIST} from "./types";

const InitialState = {
    isLoading : false,
    lists : {},
    error: null
}

export const apiReducer = (state=InitialState,action) =>{
    switch (action.type) {
        case FETCH_START: return {
            ...state,
            isLoading: true,
            error: null
        }
        case FETCH_LISTS: return {
            ...state,
            lists: action.payload,
            isLoading: false,
            error: null
        }
        case POST_LIST: return {
            ...state,
            isLoading: false,
            error: null
        }
        case DELETE_lIST: return {
            ...state,
            isLoading: false,
            error: null
        }
        default : return  state;
    }
}
