import {LOADING, REGISTER} from '../actions';

const initialState = {
    credentials: {},
    isLoading: false
}

export const registerReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
            return {
                isLoading: true
            }
        case REGISTER:
            return {
                credentials: action.payload,
                isLoading: false
            }
        default: {
            return state;
        }
    }
}