import React from 'react';
import UserMenu from './UserMenu';

class Header extends React.Component {
    render() {
        return(
            <header class="header">
                <UserMenu {...this.props}/>
            </header>
        )
    }
}
export default Header;