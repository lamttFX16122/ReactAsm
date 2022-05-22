import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
export const AddComment = (comment) => {
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: comment
    }
}

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
        const newComment = {
            dishId,
            rating,
            author,
            comment
        };
        newComment.date = new Date().toISOString();
        return fetch(baseUrl + "comments", {
                method: "POST",
                body: JSON.stringify(newComment),
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "same-origin"
            })
            .then(response => {
                if (response.ok)
                    return response;
                else {
                    var err = new Error("Error " + response.status + ": " + response.statusText);
                    err.response = response;
                    throw err
                }
            }, err => { throw (err) })
            .then(response => response.json())
            .then(response => dispatch(addComment(response)))
            .catch(err => {
                console.log("PostComment: " + err.message);
                alert("Your comment cound not be posted\nError: " + err.message);
            })
    }
    //Dishes
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var err = new Error("Error" + response.status + ": " + response.statusText);
                err.response = response;
                throw err;
            }
        }, err => {
            var errMes = new Error(err.message);
            throw errMes;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(err => dispatch(dishesFailed(err.message)));

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
        .then(response => {
            if (response.ok)
                return response;
            else {
                var err = new Error('Error ' + response.status + ": " + response.statusText);
                err.response = response;
                throw err;
            }
        }, err => {
            var errMes = new Error(err.message);
            throw errMes;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComment(comments)))
        .catch(err => dispatch(commentsFailed(err)));
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
    dispatch(promosLoading(true));
    return fetch(baseUrl + "promotions")
        .then(response => {
            if (response.ok)
                return response;
            else {
                var err = new Error("Error  " + response.status + ": " + response.statusText);
                err.response = response;
                throw err;
            }
        }, err => {
            var errMes = new Error(err.message);
            throw errMes;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(err => dispatch(promosFailed(err)))
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

// LEADER
export const fetchLeader = () => (dispatch) => {
    dispatch(leaderLoading());
    return fetch(baseUrl + "leaders")
        .then(response => {
            if (response.ok) {
                console.log("TEST OK ", response)
                return response;
            } else {
                var err = new Error("Error " + response.status + ": " + response.statusText);
                err.response = response;
                return err;
            }
        }, err => {
            var errMes = new Error(err.message);
            return errMes;
        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeader(leaders)))
        .catch(err => dispatch(leaderFailed(err)))
}
export const leaderLoading = () => ({
    type: ActionTypes.LEADER_LOADING
})
export const leaderFailed = (errMes) => ({
    type: ActionTypes.LEADER_FAILED,
    payload: errMes
})
export const addLeader = (leaders) => ({
    type: ActionTypes.ADD_LEADER,
    payload: leaders
})
export const getOneLeader = (leader) => ({
        type: ActionTypes.GET_ONE_LEADER,
        payload: leader
    })
    // Feedback
export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
})

export const postFeedback = (firstName, lastName, contactTel, email, ckbContact, sltTel, feedBack) => (dispatch) => {
    const newFeedback = {
        firstName,
        lastName,
        contactTel,
        email,
        ckbContact,
        sltTel,
        feedBack,
    };
    console.log(newFeedback)
    return fetch(baseUrl + "feedback", {
            method: "POST",
            body: JSON.stringify(newFeedback),
            headers: {
                "Content-type": "application/json"
            },
            credentials: "same-origin"
        })
        .then(response => {
            if (response.ok)
                return response;
            else {
                var errMes = new Error("Error " + response.status + ": " + response.statusText);
                errMes.response = response;
                throw errMes;
            }
        }, err => {
            throw (err);
        })
        .then(response => response.json())
        .then(response => dispatch(addFeedback(response)))
        .catch(err => {
            console.log("PostFeedback: " + err.message);
            alert("Your feedback couldn't be posted\nError: " + err.message);
        })
}
export const addFeedbacks = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACKS,
    payload: feedback
})
export const feedbackFailed = (errMes) => ({
    type: ActionTypes.FEEDBACK_FAILED,
    payload: errMes
})