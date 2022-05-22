import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Reducer, initialState } from './reducer';
import { Comments } from './comments';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './form';
import { createForms } from 'react-redux-form';
import { Contact } from './contact';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
            comments: Comments,
            dishes: Dishes,
            leaders: Leaders,
            promotions: Promotions,
            contact: Contact,
            ...createForms({
                feedback: InitialFeedback
            }),
            Reducer, // reducer
            initialState, // our initialState
        }),
        applyMiddleware(thunk, logger)

    );

    return store;
}