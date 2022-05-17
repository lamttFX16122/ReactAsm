import { createStore, combineReducers } from 'redux';
import { Reducer, initialState } from './reducer';
import { Comments } from './comments';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotions';


export const ConfigureStore = () => {
    const store = createStore(combineReducers({
            comments: Comments,
            dishes: Dishes,
            leaders: Leaders,
            promotions: Promotions,
            Reducer, // reducer
            initialState, // our initialState
        })

    );

    return store;
}