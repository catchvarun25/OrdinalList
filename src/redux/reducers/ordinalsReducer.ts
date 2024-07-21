
import * as types from "../actionTypes";

const initialState = {
    data: null,
    isLoading: false,
    error: null
};

export const ordinalsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.FETCH_ORDINALS:
            return {
                ...state,
                isLoading: true,
            };

        case types.FETCH_ORDINALS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };
        case types.FETCH_ORDINALS_FAILURE:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};
