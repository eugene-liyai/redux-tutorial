import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

let defaultState = {
  originAmount: '0.00',
  destinationAmount: '0.00',
  conversionRate: 1.5,
  feeAmount: 0.00,
  totalCost: 0.00,
};

// dispatch() then( reducer( amount(state, action) ))
function amount(state = defaultState, action) {
    if (action.type === 'CHANGE_ORIGIN_AMOUNT') {
        return {
          ...state,
          originAmount: action.data,
        };
        // return Object.assign({}, state, {originAmount: action.data});
    } else if (action.type === 'RECEIVED_CONVERSION_RATE_SUCCESS') {
        return {
            ...state,
            conversionRate: action.data.xRate,
            destinationAmount: action.data.destAmount,
        };
    } else if (action.type === 'RECEIVED_FEES_SUCCESS') {
        let newFeeAmount = action.data.feeAmount;
        let newTotal = parseFloat(state.originAmount, 10) + parseFloat(newFeeAmount, 10);
        return {
            ...state,
            feeAmount: newFeeAmount,
            totalCost: newTotal,
        };
    }


    return state;
}

let logger = createLogger({
  collapsed: true,
});

let store = createStore(amount, applyMiddleware(thunk, logger));

export default store;
