import { LOADING, LOGIN, REGISTER, GET_DATA, POST_DATA, EDIT_DATA, DELETE_DATA } from '../actions';

export const initialState = {
    credentials: {},
    data: [],
    isLoading: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
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
            console.log('register')
            console.log(action)
            return {
                ...state,
                credentials: action.payload,
                isLoading: false
            }
        case GET_DATA:
            return {
                ...state,
                data: action.payload
                // isLoading: true
            }
        case POST_DATA:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case EDIT_DATA:
            return {
                ...state,
                data: [...state.data]
            }
        case DELETE_DATA:
            return {
                ...state,
                data: [...state.data]
            }
        default:
            return state;
    }
}
