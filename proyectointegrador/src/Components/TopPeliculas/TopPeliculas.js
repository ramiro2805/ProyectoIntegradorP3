import React, {Component} from 'react';
import CardPelicula from '../Cardpelicula/CardPelicula';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './TopPeliculas.css'

class TopPeliculas extends Component {
    constructor () {
        super ()
        this.state= {
            peliculas: [],
            favoritos: localStorage.getItem('favoritos') !== null? localStorage.getItem('favoritos') : []
        }
    }
    componentDidMount () {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7384aa0b23ce68ba408f9921ee711e62")
        .then(res => res.json())
        .then(data => this.setState({peliculas : data.results}))
        .catch(e => console.log(e))
    }
    actualizarFavoritos (arrayStorage) {
        this.setState({favoritos: arrayStorage})

    }
    render(){
        if (this.state.peliculas.length == 0) {
            return <p>Cargando...</p>;
        };
        let top5 = this.state.peliculas.slice(0,5)
        return (
            <div>
                {this.state.peliculas == null ? <h1>Cargando</h1> : <div> <h1>Top Rating Peliculas:</h1>
                <div className="PadreCards">
                {
                    top5.map(( elm, idx) => <CardPelicula actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)}   esFavorito={this.state.favoritos.includes(elm.id)}  data= {elm}  key={idx + elm.title}/>)
                
                }
                 </div>
                <h5> <Link to ={`/VerTodasTop`}>Ver Todas</Link></h5>
                </div>
                }
                
            </div>
        )
    }
}

export default TopPeliculas