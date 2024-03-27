import React from 'react';
import Header from "../Components/header/Header"
import { Component} from 'react';
import detallePelicula from '../../Components/detallePelicula/detallePelicula';

class ScreenDetallePelicula extends Component {
    constructor (props){
        super(props);
        this.state = {data:null}
    }
    
    render(){
        return(
            <div>
                <detallePelicula id={this.props.match.params.id}/>
            </div>
        )
    }
}

export default ScreenDetallePelicula