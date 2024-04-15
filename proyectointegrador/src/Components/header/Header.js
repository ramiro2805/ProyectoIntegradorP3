import React, { Component } from "react";
import Buscador from "../Filtro/Filtro";
import {Link} from 'react-router-dom'
import "./Header.css"


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valorInput: "",
          peliculas: [],
        };
      }

      
      componentDidMount () {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7384aa0b23ce68ba408f9921ee711e62')
        .then(res => res.json())
        .then( data  => this.setState({ peliculas: data.results}))
        .then( e => console.log(e))
    

      }

   
      render( ) {
        return(  
            <div className="header">
                {console.log(this.state.peliculas)}
                
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favoritos">Favoritos</Link></li>
                    <li><Link to="/VerTodasTop">Top Peliculas</Link></li>
                    <li><Link to="/VerTodasUpcoming">Proximos Estrenos</Link></li>
                </ul>
            </div>
            )
      }

}

export default Header