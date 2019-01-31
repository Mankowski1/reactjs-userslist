import React, { Component } from "react";
import UsersList from "./UsersList";
class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            users: []
        }
    }

    onInputChange = (event) => {
        this.setState({
            inputValue: event.target.value //target.value jest predefinowane !!!
        });
    }

    addUser = (event) => {
        event.preventDefault(); //blokujemy odświeżanie strony (domyślne)

        let usersLocal = this.state.users; //pobieramy ilość dotychczasowych userów
        let newUser = { //potrzebne do edytowania/usuwania
            id: Date.now(), //unikalna liczba - przekształcona w milisekundy
            name: this.state.inputValue
        }
        usersLocal.push(newUser); // dodajemy nowego usera do lokalnej instancji this.state.users

        this.setState({ //updatujemy globalną instasncję this.state.users
            inputValue: "",
            users: usersLocal
        });
    }

    deleteUser = (user) => { console.log(this.state.cryptoList);
        let usersLocal = this.state.users;
        
        usersLocal = usersLocal.filter(userFromFilter => userFromFilter.id !== user.id);
        //         Alternatywny zapis funkcji filter
        //usersLocal = usersLocal.filter(userLocal => {
        //if (userLocal.id !== user.id) {
        //return true;
        //} else {
        //return false; 
        //}
        //});
        
        this.setState({users: usersLocal});
    }

    render() {

        return (
            <div className="Users">
                <h1>User's List</h1>
                <form onSubmit={this.addUser}>
                    <input type="text" placeholder="Enter name" value={this.state.inputValue} onChange={this.onInputChange} />
                    <input type="submit" value="Add User" />
                </form>
                <UsersList users={this.state.users} deleteUser={this.deleteUser} />
            </div>
        );
    }
}

export default Users;