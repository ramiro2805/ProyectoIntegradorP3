import React, {Component} from 'react';
import "./detallePelicula.css"

class detallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:null,
            enFavoritos: localStorage.getItem('favoritos') ? 
                JSON.parse(localStorage.getItem('favoritos')).includes(this.props.match.params.id) 
                : false

        }
    }

    // 'https://api.themoviedb.org/3/find/external_id?external_source=' 
    // `https://api.themoviedb.org/3/find/external_id?external_source=${this.props.match.params.id}?api_key=7384aa0b23ce68ba408f9921ee711e62`
    // https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1

    componentDidMount (){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=7384aa0b23ce68ba408f9921ee711e62`)
        .then(res => res.json())
        //  .then(data => console.log(data)) 
         .then(data => this.setState({data: data}) )
        .catch(e => console.log(e))
    }
    agregarFavoritos (idPelicula){
        let storage= localStorage.getItem('favoritos')

        if( storage !== null){
            let storageParseado = JSON.parse(storage)
            storageParseado.push(idPelicula)
            let storageString = JSON.stringify(storageParseado)
            localStorage.setItem('favoritos',storageString)

        }
        else {
            let agregarArray =[idPelicula]
            let arrayStringificado = JSON.stringify(agregarArray)
            localStorage.setItem('favoritos',arrayStringificado)
        }
        this.setState({enFavoritos: true})

    }
    sacarFavoritos(idPelicula) {
        let storage= localStorage.getItem('favoritos')
        let storageParseado = JSON.parse(storage)
        let storageFiltrado = storageParseado.filter((elm)=> elm !== idPelicula)
        let storageString = JSON.stringify(storageFiltrado)
        localStorage.setItem('favoritos',storageString)
        this.setState({enFavoritos: false})
    }
    render() {
        const { data } = this.state;
        if (!data) {
            return <p>Cargando...</p>;
        }
        return (
            <div className="PadreDetallePelicula">
                {data == null ? <h1>Cargando</h1> : <div> <div className="DetallePoster">
                <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}/images`}/>
                <p>{data.title}</p>
                </div>


                <div className="DetalleInfo">
                <p>Rating: {data.popularity}</p>
                <p>Estreno: {data.release_date}</p>
                <p>Duracion: {data.runtime}</p>
                <p>Sinopsis: {data.overview}</p>
                <div className="Generos">Genreos: {data.genres.map((elm, idx) => <p>{elm.name}</p>)} </div>

                {this.state.enFavoritos ? 
                    <button onClick={() => this.sacarFavoritos(data.id)}>Sacar de favoritos</button>
                 : 
                    <button onClick={() => this.agregarFavoritos(data.id)}>Agregar a favoritos</button>
                }
                </div>
                </div>
                 }
                {console.log(data)}
               
            </div>
        )
    }

}

export default detallePelicula