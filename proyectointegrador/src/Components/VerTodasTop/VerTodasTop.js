import React, {Component} from 'react';
import CardPelicula from '../Cardpelicula/CardPelicula';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./VerTodasTop.css"

class VerTodasTop extends Component {
    constructor () {
        super ()
        this.state= {peliculas : [], page: 1, favoritos: localStorage.getItem('favoritos')}
    }
    componentDidMount () {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7384aa0b23ce68ba408f9921ee711e62&page=1")
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => this.setState({peliculas : data.results}))
        .catch(e => console.log(e))
    }
    buscarMas(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7384aa0b23ce68ba408f9921ee711e62&page=${(this.state.page + 1)}`)
        .then(res => res.json())
        .then(data => this.setState({
            peliculas : this.state.peliculas.concat(data.results),
            page: this.state.page + 1
        }))
        .catch(err => console.log(err))
    }
    actualizarFavoritos (arrayStorage) {
        this.setState({favoritos: arrayStorage})

    }
    render() {
        return(
            <div className="PadreVerTodas">
                {console.log(this.state.peliculas)}
                 {
                    this.state.peliculas.map(( elm, idx) => <CardPelicula actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)}  esFavorito={this.state.favoritos.includes(elm.id)} data= {elm}  key={idx + elm.title}/>)
                    
                }
                <button onClick={()=>this.buscarMas()}> Ver Mas</button>
            </div>
        )
    }
}

export default VerTodasTop