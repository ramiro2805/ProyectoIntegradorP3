import React, {Component} from 'react';
import CardPelicula from '../Cardpelicula/CardPelicula';

class UpComingMovies extends Component {
    constructor () {
        super ()
        this.state= {peliculas : []}
    }
    componentDidMount () {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=7384aa0b23ce68ba408f9921ee711e62")
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => this.setState({peliculas : data.results}))
        .catch(e => console.log(e))
    }
    render(){
        let top5 = this.state.peliculas.slice(0,5)
        return (
            <div className="UpComingMovies">
                {console.log(this.state.peliculas)}
                <h1>Proximos estrenos:</h1>
                {
                    top5.map(( elm, idx) => <CardPelicula  data= {elm}  key={idx + elm.title}/>)
                
                }
            </div>
        )
    }
}

export default UpComingMovies