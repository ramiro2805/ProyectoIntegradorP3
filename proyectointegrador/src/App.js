
import {Route, Switch} from 'react-router-dom';
import Home from "../src/Screens/Home"
import Header from './Components/header/Header';
import Footer from './Components/Footer/Footer';
import ScreenDetallePelicula from './Components/detallePelicula/detallePelicula';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/"  exact={true} component={Home}/>
        <Route path="/detalle/pelicula/:id" component={ScreenDetallePelicula}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
