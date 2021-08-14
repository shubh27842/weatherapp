import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WeatherPage from './components/WeatherPage';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router basename="/weatherapp">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <WeatherPage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/service">
          <Service />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
