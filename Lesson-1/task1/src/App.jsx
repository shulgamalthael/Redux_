import React from 'react';
import { ThemeContext, themes } from './style-context'

import ThemedButton from './ThemedButton';

class App extends React.Component {
  state = {
    theme: themes.light
  }
  toggleTheme = () => {
    const newTheme = this.state.theme === themes.dark
      ? themes.light
      : themes.dark;
    this.setState({
      theme: newTheme
    })
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme} >
          <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>
          <ThemedButton onClick={this.toggleTheme}>Dafault Theme</ThemedButton>
      </div>
    )
  }
};

export default App