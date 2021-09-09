import { Component } from "react";
import './Genre.css'

class Genre extends Component {



    render(){
        return (
            <div className = 'genre'>
                <h1 className = 'genreheader'>Genres</h1>
                <input type = 'text' className = 'genresearch' placeholder = "Find a Genre By Name"></input>
                <button>Find a Genre</button>
            </div>
        )
    }

    
}
export default Genre