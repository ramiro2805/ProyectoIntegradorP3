import React, {Component} from 'react';
import CardPelicula from '../Cardpelicula/CardPelicula';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class VerTodasTop extends Component {
    constructor () {
        super ()
        this.state= {peliculas : []}
    }
    componentDidMount () {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7384aa0b23ce68ba408f9921ee711e62")
        .then(res => res.json())
        .then(data => this.setState({peliculas : data.results}))
        .catch(e => console.log(e))
    }
    render() {
        return(
            <div>
                 {
                    this.state.peliculas.map(( elm, idx) => <CardPelicula  data= {elm}  key={idx + elm.title}/>)
                
                }
            </div>
        )
    }
}

export default VerTodasTop