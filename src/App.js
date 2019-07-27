import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar2 from './components/Navbar2';
import Contact from './components/Contact';
import Home from './components/Home';
import Talleres from './components/Talleres';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import GallerySlide from './components/GallerySlide';

class App extends React.Component {
  
  render() {

    return (
      <React.Fragment>
      <Navbar2 />
      <Switch>
        <Route path="/" exact component={Home} />
        {/*<Route path="/Talleres" component={Talleres} />*/}
        <Route path="/Talleres" component={(...props) => <Talleres margenTop={"80px"}  />} />
        
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Gallery" component={GallerySlide} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </React.Fragment>   
    );
  }
}

export default App;
