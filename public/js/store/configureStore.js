import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

let defaultState = {
  originAmount: '0.00',
  destinationAmount: '0.00',
  conversionRate: 1.5,
};

// dispatch() then( reducer( amount(state, action) ))
function amount(state = defaultState, action) {
    if (action.type === 'CHANGE_ORIGIN_AMOUNT') {
        return {
          ...state,
          originAmount: action.data,
        };
        // return Object.assign({}, state, {originAmount: action.data});
    } else if (action.type === 'RECEIVED_CONVERSION_RATE') {
        return {
            ...state,
            conversionRate: action.data.xRate,
            destinationAmount: action.data.destAmount
        };
    }
    return state;
}

let logger = createLogger({
  collapsed: true,
});

let store = createStore(amount, applyMiddleware(thunk, logger));

export default store;
