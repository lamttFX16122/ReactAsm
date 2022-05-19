import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
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
    //Dishes
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
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

// Comment
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComment(comments)));
}
export const commentsFailed = (errMes) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMes
})
export const addComment = (comments) => ({
        type: ActionTypes.ADD_COMMENTS,
        payload: comments
    })
    //Promos
export const fetchPromos = () => (dispatch) => {
    // dispatch(promosLoading(false));
    return fetch("http://localhost:3001/promotions")
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
})
export const promosFailed = (errMes) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMes
})
export const addPromos = (promos) => {
    return ({
        type: ActionTypes.ADD_PROMOS,
        payload: promos
    })
}