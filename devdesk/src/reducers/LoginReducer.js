import {LOADING, LOGIN} from '../actions';

export const initialState = {
    credentials: {},
    isLoading: false
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
            return {
                isLoading: true
            }
        case LOGIN:
            return {
                credentials: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}