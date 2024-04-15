import React from 'react';
import Header from "../Components/header/Header"
import { Component} from 'react';
import TopPeliculas from '../Components/TopPeliculas/TopPeliculas';
import UpComingMovies from '../Components/UpcomingMovies/UpComingMovies';
import "./Home.css"
import Buscador from '../Components/Buscador/Buscador';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log('props de home',props)
    }

    render () {
        return (
            <div className="PadreHome">
                <Buscador className="BuscadorHome" history={this.props.history}/>
                <div className="PadreSecciones">
                <TopPeliculas/>
                <UpComingMovies/>
                </div>
            </div>
        )
    }
}

export default Home
