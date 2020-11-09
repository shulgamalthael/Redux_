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
                    <Header value={this.state.userData}/>
            </div>

        )
    }
}

export default App;