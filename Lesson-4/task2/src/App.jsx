import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Users from './Users';

const App = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  )
}

export default App