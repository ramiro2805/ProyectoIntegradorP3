import React from 'react';
import Header from "../Components/header/Header"
import { Component} from 'react';
import TopPeliculas from '../Components/TopPeliculas/TopPeliculas';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
     
    render () {
        return (
            <div>
                <TopPeliculas/>
            </div>
        )
    }
}

export default Home
