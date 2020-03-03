import {LOADING, LOGIN, REGISTER, GET_DATA} from '../actions';

export const initialState = {
    credentials: {},
    data: [],
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
                ...state,
                credentials: action.payload,
                isLoading: false
            }
        case REGISTER:
            return {
                    credentials: action.payload,
                    isLoading: false
                }
        case GET_DATA:
            return {
                ...state,
                data: action.payload,
                loading: true
            }
        default:
            return state;
    }
}
