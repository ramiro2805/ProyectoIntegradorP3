import React, {Component} from 'react';

class detallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = { data:null
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
    render() {
        const { data } = this.state;
        if (!data) {
            return <p>Cargando...</p>;
        }

        return (
            <div>
                <p>Hola</p>
                {console.log(data)}
                <p>{data.original_title}</p>
            </div>
        )
    }

}

export default detallePelicula