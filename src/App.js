import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
