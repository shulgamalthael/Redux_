import { createStore } from 'redux';

export const INCREMENT = 'COUNTER/INCREMENT';
export const DECREMENT = 'COUNTER/DECREMENT';
export const RESET = 'COUNTER/RESET';

export const increase = () => {
    return {
        type: INCREMENT
    }
}

export const decrease = () => {
    return {
        type: DECREMENT
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        case RESET:
            return state
    }
}

export const store = createStore(counterReducer);