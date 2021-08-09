import React from 'react';
import Header from './components/home/header';
import Home from './components/home/home';
import "./index.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Software from './components/software/software';
import Contact from './components/contact/contact';

function App() {
  return (
    <React.Fragment>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/software' component={Software} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
