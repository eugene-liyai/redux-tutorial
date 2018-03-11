import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

let defaultState = {
    originAmount: '0.00',
};

// dispatch() then( reducer( amount(state, action) ))
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

let logger = createLogger({
  collapsed: true,
});

let store = createStore(amount, applyMiddleware(thunk, logger));

export default store;
