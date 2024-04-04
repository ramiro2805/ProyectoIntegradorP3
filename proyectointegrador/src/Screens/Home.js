import React from 'react';
import Header from "../Components/header/Header"
import { Component} from 'react';
import TopPeliculas from '../Components/TopPeliculas/TopPeliculas';
import UpComingMovies from '../Components/UpcomingMovies/UpComingMovies';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
     
    render () {
        return (
            <div>
                <TopPeliculas/>
                <UpComingMovies/>
            </div>
        )
    }
}

export default Home
