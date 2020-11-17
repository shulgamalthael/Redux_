import { createStore } from 'redux';
import { INCREMENT, DECREMENT, RESET } from './counter.actions';

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

const store = createStore(counterReducer);

export default store;