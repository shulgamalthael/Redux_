import React from 'react';
import Header from './Header';
import { Context } from './context';

class App extends React.Component {

    state = {
        userData: { 
            name: 'Nikola Tesla', 
            avatar_url: 'https://avatars3.githubusercontent.com/u10001' 
        }
    }

    render() {
        return(
            <div class="page">
                <Context.Provider value={this.state.userData}>
                    <Header/>
                </Context.Provider>
            </div>

        )
    }
}

export default App;