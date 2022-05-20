import * as ActionTypes from "./ActionTypes";


export const Comments = (state = { errMes: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment) };
        case ActionTypes.ADD_COMMENTS:
            if (Array.isArray(comment)) {
                return {...state, errMes: null, comments: action.payload }
            } else {
                var stateArray = state.comments;
                stateArray.push(action.payload);
                return {...state, errMes: null, comments: stateArray };
            }
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMes: action.payload }
        default:
            return state;
    }
}