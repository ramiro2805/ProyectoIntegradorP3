import React, {Component} from "react"
import {Link} from 'react-router-dom'

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
      <form onSubmit={(evento) => this.detenerDefault(evento)}>
        <input
          type="text"
          onChange={(evento) => this.guardarInput(evento)}
          value={this.state.valorInput}
          placeholder="Buscar..."
        />
          <button
          >Buscar</button>
        {console.log(this.state.valorInput)}
      </form>
    );
  }


}


export default Buscador