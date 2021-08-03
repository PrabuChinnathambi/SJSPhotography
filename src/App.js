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
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/userDetails" component={UserDetails} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
