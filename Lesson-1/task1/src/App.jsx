import React from 'react';
import ThemedButton from './ThemedButton';
import { ThemeContext, themes } from './style-context';

class App extends React.Component {

    state = {
        theme: themes.light
    }

    handleClick = () => {
        const newTheme = this.state.theme === themes.light ? themes.dark : themes.light;

        this.setState({
            theme: newTheme
        })
    }

    render() {
        return(
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <ThemedButton onClick={this.handleClick}>Dynamic Theme</ThemedButton>
                </ThemeContext.Provider>
                <ThemedButton onClick={this.handleClick}>Default Theme</ThemedButton>
            </div>

        )
    }
}

export default App;