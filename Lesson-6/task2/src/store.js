import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import {usersReducer} from './users/users.reducer';

const logger = store => next => action =>{
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result
}

const reducer = combineReducers({
  users: usersReducer
})
const composeEnhanceres = compose || window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  reducer, 
  composeEnhanceres(
    applyMiddleware(logger, thunk)
  )
  );

export default store