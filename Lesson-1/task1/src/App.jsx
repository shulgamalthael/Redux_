import React from 'react';
import { StyleContext, themes } from './style-context.js';
import ThemedButton from './ThemedButton.jsx';

class App extends React.Component {

    state = {
        theme: dark,
    }

    handleClick = () => {

        newTheme = this.state.style.dark ? themes.light : themes.dark;

        this.setState({
            theme: newTheme
        })
    }

    render() {
        return(
            <>
                <ThemeContext.Provider value={this.state.theme}>
                    <ThemedButton>Dynamic Theme</ThemedButton>
                </ThemeContext.Provider>
                <ThemedButton>Default Theme</ThemedButton>
            </>
        )
    }
}

export default App;