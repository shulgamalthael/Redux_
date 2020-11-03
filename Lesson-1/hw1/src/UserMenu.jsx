import React from 'react';

class UserMenu extends React.Component {
    render() {
        return(
            <div class="menu">
                <span class="menu__greeting">{this.props.userData.name}</span>
                <img alt="User Avatar" src={this.props.userData.avatar_url} class="menu__avatar"/>
            </div>
        )
    }
}

export default UserMenu;