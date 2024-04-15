import React, {Component} from 'react';
import CardPelicula from '../Cardpelicula/CardPelicula';
import "./VerTodasUpcoming.css"
import Filtro from '../Filtro/Filtro';

class VerTodasUpcoming extends Component {
    constructor () {
        super ()
        this.state= {backup :[],peliculas : [], page: 1,  favoritos: localStorage.getItem('favoritos') !== null? localStorage.getItem('favoritos') : []}
    }
    componentDidMount () {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=7384aa0b23ce68ba408f9921ee711e62&page=1")
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => this.setState({peliculas : data.results, backup : data.results}))
        .catch(e => console.log(e))
    }
    buscarMas(){
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=7384aa0b23ce68ba408f9921ee711e62&page=${(this.state.page + 1)}`)
        .then(res => res.json())
        .then(data => this.setState({
            peliculas : this.state.peliculas.concat(data.results),
            page: this.state.page + 1,
            backup : this.state.backup.concat(data.results)
        }))
        .catch(err => console.log(err))
    }
    actualizarFavoritos (arrayStorage) {
        this.setState({favoritos: arrayStorage})

    }
    filtrarPeliculas(valorInput){
        let peliculasFiltradas = this.state.backup.filter(
            (elm)=>elm.title.toLowerCase().includes(valorInput.toLowerCase()))
            this.setState({
                peliculas: peliculasFiltradas
            })
      } 
    render() {
        return(
            <div className="PadreVerTodas">
                {console.log(this.state.peliculas)}
                <Filtro filtrarPeliculas = {(valorInput) => this.filtrarPeliculas(valorInput)}/>

                {this.state.peliculas == null ? <h1>Cargando ..</h1> : <div>
                {
                    this.state.peliculas.map(( elm, idx) => <CardPelicula actualizarFavoritos={(arr) => this.actualizarFavoritos(arr)}  esFavorito={this.state.favoritos.includes(elm.id)} data= {elm}  key={idx + elm.title}/>)
                    
                }
                <button onClick={()=>this.buscarMas()}> Ver Mas</button>   
                    </div>}
                
            </div>
        )
    }
}

export default VerTodasUpcoming