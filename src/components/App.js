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
<<<<<<< HEAD


function App() {
  return (
    <React.Fragment>
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

    </React.Fragment>
=======
import ThemeContextProvider from "../contexts/ThemeContext";

function App() {
  return (

    <ThemeContextProvider>
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
    </ThemeContextProvider>


>>>>>>> hero
  );
}

export default App;
