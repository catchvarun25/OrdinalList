
import * as types from "../actionTypes";

const initialState = {
    data: null,
    isLoading: false,
    error: null
};

export const ordinalListReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.FETCH_ORDINAL_DETAIL:
            return {
                ...state,
                isLoading: true,
            };

        case types.FETCH_ORDINAL_DETAIL_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };
        case types.FETCH_ORDINAL_DETAIL_FAILURE:
            return {
                ...state,
                isLoading: false
            };
        case types.CLEAR_ORDINALS:
            return {
                ...state,
                isLoading: false,
                data: [],
            };
        default:
            return state;
    }
};
