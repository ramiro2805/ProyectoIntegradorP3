import React from 'react';

class detallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {data:null}
    }
    apiCall(url,consecuencia) {
        fetch(url)
        .then(res => res.json())
        .then(data => consecuencia)
        .catch(e => console.log(e))
    }
    componentDidMount (){
        this.apiCall()
    }
    render() {
        return (
            <div>

            </div>
        )
    }

}

export default deatllePelicula