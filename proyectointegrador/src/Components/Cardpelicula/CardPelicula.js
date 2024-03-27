import React, {Component}from 'react';
import { Link } from "react-router-dom"

class CardPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VerMas : 0
        }
    }
    VerDescripcion (){
        this.setState({VerMas:1})
    }
    OcultarDescripcion() {
        this.setState({VerMas:0})
    }
        render() {
        return(
            <article className='card-pelicula'>
                <img src={this.props.data.poster_path} />
            <h2>{this.props.data.title}</h2>
            {this.state.VerMas === 0?
            <button onClick= {() => this.VerDescripcion()}> Ver descripcion</button>:
            <button onClick= {() => this.OcultarDescripcion()}>Ocultar descripcion</button>}
            {this.state.VerMas === 1?
                <p>{this.props.data.overview}</p>:
                <p></p>}
            <h5 className="boton"> <Link to ={`/detalle/pelicula/${this.props.data.id}`}>Ir a detalle</Link></h5>
        </article>

        )
        }
}

export default CardPelicula