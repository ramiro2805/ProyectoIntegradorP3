import React, {Component}from 'react';


class CardPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
        render() {
        return(
            <article className='card-pelicula'>
            <h2>{this.props.data.title}</h2>
        </article>

        )
        }
}

export default CardPelicula