import * as ActionTypes from './ActionTypes';
export const Contact = (state = { feedback: [], errMes: null }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            const feedback = action.payload;
            return {...state, feedback: state.feedback.concat(feedback) }
        case ActionTypes.ADD_FEEDBACKS:
            return {...state, feedback: action.payload, errMes: null }
        case ActionTypes.FEEDBACK_FAILED:
            return {...state, errMes: action.payload }
        default:
            return state;

    }
}