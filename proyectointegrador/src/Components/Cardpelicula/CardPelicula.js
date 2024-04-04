import React, {Component}from 'react';
import { Link } from "react-router-dom"
import "./CardPelicula.css"

class CardPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VerMas : 0
        }
    }
    VerDescripcion (){
        this.setState({VerMas:1})
    }
    OcultarDescripcion() {
        this.setState({VerMas:0})
    }
        render() {
        return(
            // `https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}/images` esto es para el poster pero es muy grande , me lo sugirio chat gpt y funciono
            // `https://api.themoviedb.org/3/movie/${this.props.data.id}/images`  este es el que dice la api pero no funciona
            <article className='card-pelicula'>
                <img className="cardimg"src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}/images`} alt={this.props.data.title}></img>
            <h2>{this.props.data.title}</h2>
            {this.state.VerMas === 0?
            <button onClick= {() => this.VerDescripcion()}> Ver descripcion</button>:
            <button onClick= {() => this.OcultarDescripcion()}>Ocultar descripcion</button>}
            {this.state.VerMas === 1?
                <p>{this.props.data.overview}</p>:
                <p></p>}
            <h5 className="boton"> <Link to ={`/detalle/pelicula/${this.props.data.id}`}>Ir a detalle</Link></h5>
        </article>

        )
        }
}

export default CardPelicula