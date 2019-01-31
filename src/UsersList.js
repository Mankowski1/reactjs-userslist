import React, { Component } from "react";

class UsersList extends Component {
    render() {
        return (
            <div class="wrapper">
            <ul>
              {this.props.users.map(user => 
                    <li key={user.id} onClick ={() => this.props.deleteUser(user)}>{user.name}</li>
                )}
            </ul>
            </div>
        );
    }
}

export default UsersList;