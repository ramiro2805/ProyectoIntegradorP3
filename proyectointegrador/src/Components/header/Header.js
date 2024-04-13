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