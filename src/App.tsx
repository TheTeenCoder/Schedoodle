import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import './styles/output.css'
import './App.css';
import Home from './routes/Home'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
