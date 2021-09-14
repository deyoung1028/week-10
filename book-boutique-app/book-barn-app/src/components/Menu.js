import { Component } from "react";
import { NavLink } from "react-router-dom";
import './Menu.css'

class Menu extends Component {

   


render() {
    return (
        <div className = 'menu'>
            <h1 className = 'siteName'>Book Boutique</h1>
            <NavLink to = "/"><div>Home</div></NavLink>
            <NavLink to = "/"><div>MyBooks</div></NavLink>
            <NavLink to = "/add-book"><div>Add a Book</div></NavLink>
            <input type = 'text' className = 'searchbox' placeholder = 'Search Books'></input>
            <NavLink to='/cart'>Cart</NavLink>
            <NavLink to = "/login"><div>Login</div></NavLink>
            <NavLink to = "/register"><div>Register</div></NavLink>
        </div>
    )
}

}
export default Menu