import React, {Component} from 'react';

class detallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {data:null}
    }

    componentDidMount (){
        fetch(`https://api.themoviedb.org/3/find/${this.props.id}?api_key=7384aa0b23ce68ba408f9921ee711e62`)
        .then(res => res.json())
        .then(data => this.setState({data: data.results}))
        .catch(e => console.log(e))
    }
    render() {
        return (
            <div>
                <p>{this.state.data}</p>
            </div>
        )
    }

}

export default detallePelicula