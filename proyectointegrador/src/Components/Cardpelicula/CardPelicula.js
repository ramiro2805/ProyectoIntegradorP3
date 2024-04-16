import React, {Component}from 'react';
import { Link } from "react-router-dom"
import "./CardPelicula.css"

class CardPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VerMas : 0,
            favoritos : []
        }
        console.log(this.props);
    }
    VerDescripcion (){
        this.setState({VerMas:1})
    }
    OcultarDescripcion() {
        this.setState({VerMas:0})
    }
    agregarFavoritos (idPelicula){
        let storage= localStorage.getItem('favoritos')

        if( storage !== null){
            let storageParseado = JSON.parse(storage)
            storageParseado.push(idPelicula)
            this.props.actualizarFavoritos(storageParseado)
            let storageString = JSON.stringify(storageParseado)
            localStorage.setItem('favoritos',storageString)

        }

        else {
            let agregarArray =[idPelicula]
            this.props.actualizarFavoritos(agregarArray)
            let arrayStringificado = JSON.stringify(agregarArray)
            localStorage.setItem('favoritos',arrayStringificado)
        }
    }
    sacarFavoritos(idPelicula) {
        let storage= localStorage.getItem('favoritos')
        let storageParseado = JSON.parse(storage)
        let storageFiltrado = storageParseado.filter((elm)=> elm !== idPelicula)
        this.props.actualizarFavoritos(storageFiltrado)
        let storageString = JSON.stringify(storageFiltrado)
        localStorage.setItem('favoritos',storageString)
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
            <h5 className="detalle-link"> <Link to ={`/detalle/pelicula/${this.props.data.id}`}>Ir a detalle</Link></h5>
            {this.props.esFavorito == true ? <button onClick={()=> this.sacarFavoritos(this.props.data.id)}>Sacar de favoritos</button> : <button onClick={()=> this.agregarFavoritos(this.props.data.id)}>Agregar a favoritos</button> }

        </article>

        )
        }
}

export default CardPelicula