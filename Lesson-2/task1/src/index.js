import { createStore } from 'redux';

const incrementAction = {
    type: 'INCREMENT',
},

const decrementAction = {
    TYPE: 'DECREMENT'
}

const counerReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT': 
            return state - 1;
        case 'DEFAULT':
            return state;
    }
};

const store = createReducer(counterReducer);