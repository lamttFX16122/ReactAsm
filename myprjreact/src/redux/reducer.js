import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    // switch(action.type)
    // {
    //     case
    // }
    return state;
};

// var initialState = data ? data : [];


// var myReducer = (state = initialState, action) => {
//     var id = '';
//     var index = '';
//     switch (action.type) {
//         case types.LIST_ALL:
//             return state;
//         default:
//             return state;
//     }
// }
// export default myReducer;