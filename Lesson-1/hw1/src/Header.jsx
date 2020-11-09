import React from 'react';
import { Context } from './context';
import UserMenu from './UserMenu';

class Header extends React.Component {
    render() {
        return(
            <header class="header">
                <Context.Provider value={this.props.value}>
                    <UserMenu/>
                </Context.Provider>
            </header>
        )
    }
}

export default Header;