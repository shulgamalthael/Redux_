import React from 'react';
import { Context } from './context';

class UserMenu extends React.Component {
    render() {
        return(
            <div class="menu">
                <span class="menu__greeting">{this.context.name}</span>
                <img
                    alt="User Avatar"
                    src={this.context.avatar_url}
                    class="menu__avatar"
                />
            </div>
        )
    }
}

UserMenu.contextType = Context;
export default UserMenu;