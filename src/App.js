import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import About from './Components/About';
import Shop from './Components/Shop';
import ShopDetails from './Components/ShopDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ShopDetails} />
          <Route exact path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <h1>this is home page</h1>
    </div>
  );
};

const Error = () => {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

export default App;
