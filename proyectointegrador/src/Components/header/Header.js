import React, { Component } from "react";
import Buscador from "../Buscador/Buscador";



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valorInput: "",
          peliculas: [],
        };
      }
    filtrarPeliculas(valorInput){
        let peliculasFiltradas = this.state.peliculas.filter(
            (elm)=>elm.name.toLowerCase().includes(valorInput.toLowerCase()))
            this.setState({
                peliculas: peliculasFiltradas
            })
      } 
      render( ) {
        return(  
            <div>
                <Buscador filtrarPeliculas = {(valorInput) => this.filtrarPeliculas(valorInput)}/>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Favoritos</a></li>
                    <li><a>Peliculas mas populares</a></li>
                </ul>
            </div>
            )
      }

}

export default Header