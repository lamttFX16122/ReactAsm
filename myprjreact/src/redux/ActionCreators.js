import * as ActionTypes from "./ActionTypes";
export const AddComment = (dishId, rating, author, comment) => {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId,
            rating,
            author,
            comment
        }
    }
}