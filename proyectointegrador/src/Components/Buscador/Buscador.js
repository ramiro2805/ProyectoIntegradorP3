import React, {Component} from "react"
import {Link} from 'react-router-dom'
import "./Buscador.css"

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valorInput: "",
          peliculas: [],
        };
      }

detenerDefault(evento) {
    evento.preventDefault();
    this.props.history.push('/busqueda/'+this.state.valorInput)
  }

  guardarInput(evento) {
    this.setState(
      {
        valorInput: evento.target.value,
      }
    );
  }

render() {
  
    return (
      <div className="search-container">
      <form onSubmit={(evento) => this.detenerDefault(evento)}>
        <input
        className="search-input"
          type="text"
          onChange={(evento) => this.guardarInput(evento)}
          value={this.state.valorInput}
          placeholder="Buscar..."
        />
        <i class="fas fa-search search-icon"></i>
      
        {console.log(this.state.valorInput)}
      </form>
      </div>
    );
  }


}


export default Buscador