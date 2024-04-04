
import {Route, Switch} from 'react-router-dom';
import Home from "../src/Screens/Home"
import Header from './Components/header/Header';
import Footer from './Components/Footer/Footer';
import ScreenDetallePelicula from './Components/detallePelicula/detallePelicula';
import ScreenVerTodasTop from './Screens/VerTodasTop/ScreenVerTodasTop';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/"  exact={true} component={Home}/>
        <Route path="/detalle/pelicula/:id" component={ScreenDetallePelicula}/>
        <Route path="/VerTodasTop" component={ScreenVerTodasTop}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
