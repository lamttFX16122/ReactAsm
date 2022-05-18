import * as ActionTypes from "./ActionTypes";
import { DISHES } from "./../shared/dishes";
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

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})
export const dishesFailed = (errMes) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMes
})
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})