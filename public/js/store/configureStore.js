import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

var defaultState = {
    originAmount: '0.00',
};

function amount(state = defaultState, action) {
    if (action.type === 'CHANGE_ORIGIN_AMOUNT') {
        return {
          ...state,
          originAmount: action.data,
        };
        // return Object.assign({}, state, {originAmount: action.data});
    }
    return state;
}

var store = createStore(amount, applyMiddleware(logger));

export default store;
