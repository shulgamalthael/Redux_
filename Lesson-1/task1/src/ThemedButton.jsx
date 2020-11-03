import React from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component {
    render() {
        return(
            <button 
                {...this.props} 
                style={{
                    backgroundColor: this.context.background,
                    color: this.context.fontColor
                }}
                class="btn"
            ></button>
        )
    }
}

ThemedButton.contextType = ThemeContext;
export default ThemedButton;