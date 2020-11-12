import { add_user, delete_user, update_user } from './users.actions';
import { increment, decrement, reset } from './counter.actions';
import store from './store';

store.subscribe(() => console.log(store.getstore()));

store.dispatch(increment(1));

store.dispatch(add_user({id: 1, name: 'Nikita', age: 20}));