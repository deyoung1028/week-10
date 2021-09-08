import { Component } from "react";
import './Header.css'

class Header extends Component {

   


render() {
    return (
        <div className = 'header'>
            <h1 className = 'siteName'>Book Boutique</h1>
            <h3 className = 'home'>Home</h3>
            <h3 className = 'myBooks'>My Books</h3>
            <h3 className = 'community'>Community</h3>
            <input type = 'text' className = 'searchbox' placeholder = 'Search Books'></input>
            <h3 className = 'signIn'>Sign In</h3>
            <h3 className = 'signIn'>Sign In</h3>
        </div>
    )
}

}
export default Header