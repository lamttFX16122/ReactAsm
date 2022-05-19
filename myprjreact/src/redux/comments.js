import * as ActionTypes from "./ActionTypes";


export const Comments = (state = { errMes: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMes: null, comments: action.payload }
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMes: action.payload }
        default:
            return state;
    }
}