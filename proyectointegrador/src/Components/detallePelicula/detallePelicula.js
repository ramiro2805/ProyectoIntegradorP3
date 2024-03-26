import React, {Component} from 'react';

class detallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {data:null}
    }

    componentDidMount (){
        fetch()
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(e => console.log(e))
    }
    render() {
        return (
            <div>

            </div>
        )
    }

}

export default detallePelicula