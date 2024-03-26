
import {Switch, Route} from 'react-router-dom';
import Home from "../src/Screens/Home"
import Header from './Components/header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
