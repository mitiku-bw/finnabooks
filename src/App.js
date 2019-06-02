import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Details from './components/books/Details';
import { Provider } from './context'
import './App.css';

function App() {
  return (
    <Provider>
      <Router basename={process.env.PUBLIC_URL}>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/details/book/:id" component={Details} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
    
  );
}

export default App;
