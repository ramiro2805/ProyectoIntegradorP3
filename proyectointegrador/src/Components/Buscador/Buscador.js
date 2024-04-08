import React, {Component} from "react"

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
  }

  guardarInput(evento) {
    this.setState(
      {
        valorInput: evento.target.value,
      },
      () => this.props.filtrarPeliculas(this.state.valorInput)
    );
  }

  filtrarPeliculas(valorInput){
    let peliculasFiltradas = this.state.peliculas.filter(
        (elm)=>elm.name.toLowerCase().includes(valorInput.toLowerCase()))
        this.setState({
            peliculas: peliculasFiltradas
        })
  } 

render() {
    return (
      <form onSubmit={(evento) => this.detenerDefault(evento)}>
        <input
          type="text"
          onChange={(evento) => this.guardarInput(evento)}
          value={this.state.valorInput}
        />
      </form>
    );
  }


}

export default Buscador