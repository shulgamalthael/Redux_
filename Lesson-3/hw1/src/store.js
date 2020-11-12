import { createStore, combineReducers } from 'redux';
import { cartReducer } from './cart.reducer';
import { languageReducer } from './language.reducer';
import { userReducer } from './user.reducer';

const reducer = combineReducers({
    cart: cartReducer,
    language: languageReducer,
    user: userReducer
})

const store = createStore(reducer);

export default store;