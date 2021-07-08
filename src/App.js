import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import UserDetails from './components/UserDetails/UserDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/userDetails" component={UserDetails} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
