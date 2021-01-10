import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './About';
import Portfolio from './Portfolio';
import Work from './Work';
import Skills from './Skills';
import Home from './Home';


function App() {
  return (
  
      <Router>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
        </Switch>

      </Router>
  
  );
}

export default App;
