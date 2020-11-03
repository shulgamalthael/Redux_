import React from 'react';
import Header from './Header';

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
                <Header {...this.state} />
            </div>
        )
    }
}

export default App;