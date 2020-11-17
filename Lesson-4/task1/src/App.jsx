import React from 'react';
import { Provider } from 'react-redux';
import store from './counter.reducer';
import Counter from './Counter';

class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <Counter />
            </Provider>
        )
    }
}

export default App;