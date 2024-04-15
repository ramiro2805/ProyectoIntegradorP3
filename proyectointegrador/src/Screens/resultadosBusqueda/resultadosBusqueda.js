import React from 'react';
import { Component} from 'react';


class resultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valorInput: "",
          peliculas: [],
        };
      }

      componentDidMount () {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.busqueda}?api_key=7384aa0b23ce68ba408f9921ee711e62`)
        .then(res => res.json())
        .then( data  => this.setState({ peliculas: data.results}))
        .then( e => console.log(e))
    

      }
 
    render(){
        return(
            <div>
                {console.log(this.state.peliculas)}
                
            </div>
        )
    }

}
export default resultadoBusqueda