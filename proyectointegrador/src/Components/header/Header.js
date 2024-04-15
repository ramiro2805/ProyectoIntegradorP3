import React, { Component } from "react";
import Buscador from "../Filtro/Filtro";



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
            <div>
                {console.log(this.state.peliculas)}
                
                <ul>
                    <li><a href="/" style={{textDecoration:"none", textTransform:"uppercase"}}>Home</a></li>
                    <li><a href="/favoritos" style={{textDecoration:"none", textTransform:"uppercase"}}>Favoritos</a></li>
                    <li><a href="/VerTodasTop" style={{textDecoration:"none", textTransform:"uppercase"}}>Peliculas mas populares</a></li>
                    <li><a href="/VerTodasUpcoming" style={{textDecoration:"none", textTransform:"uppercase"}}>Proximos estrenos</a></li>
                </ul>
            </div>
            )
      }

}

export default Header