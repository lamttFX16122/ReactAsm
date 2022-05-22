// import { actions } from "react-redux-form";
import * as ActionTypes from "./ActionTypes";
export const Leaders = (state = { isLoading: true, errMes: null, leaders: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADER:
            // var comment = action.payload;
            if (Array.isArray(action.payload)) {
                return {
                    ...state,
                    isLoading: false,
                    errMes: null,
                    leaders: action.payload
                };
            } else {
                var leaderArr = state.leaders;
                leaderArr.push(action.payload);
                return {
                    ...state,
                    isLoading: false,
                    errMes: null,
                    leaders: leaderArr
                };
            }
        case ActionTypes.LEADER_LOADING:
            return {
                ...state,
                isLoading: true,
                errMes: null,
                leaders: []
            };
        case ActionTypes.LEADER_FAILED:
            return {
                ...state,
                isLoading: false,
                errMes: action.payload
            };
        case ActionTypes.GET_ONE_LEADER:
            return {
                ...state,
                isLoading: false,
                errMes: null,
                leaders: action.payload
            };
        default:
            return state;
    }
}