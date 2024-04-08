import React from 'react';

import { Component} from 'react';
import CardPelicula from '../../Components/Cardpelicula/CardPelicula';

class Favoritos extends Component {
    constructor (props){
        super(props);
        this.state = {favoritos: localStorage.getItem('favoritos'),peliculas:[]}
    }
    
    componentDidMount (){
        if (this.state.favoritos !== null) {
            let storageParsado = JSON.parse(this.state.favoritos)
            console.log(storageParsado);
            Promise.all (
                storageParsado.map ((elm => 
                    fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=7384aa0b23ce68ba408f9921ee711e62`)
                    .then(res => res.json())
                //  .then(data => console.log(data)) 
                    .then(data => this.setState({peliculas: this.state.peliculas.concat(data)}) )
                    .catch(e => console.log(e))
                        ))
            )
       
        }
    }
    actualizarFavoritos (arrayStorage) {
        this.setState({favoritos: arrayStorage})

    }
    render(){
        return(
            <div>
                {console.log(this.state.peliculas)}
                {this.state.peliculas.length > 0 ?
                this.state.peliculas.map((elm,idx) =>  <CardPelicula actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)}  esFavorito={true} data= {elm} key= {`${idx}-${elm.name}`}/>):
                <h1>No tenes favoritos</h1>
            }
            </div>
        )
    }
}

export default Favoritos