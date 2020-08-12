import React, {Component} from 'react';
import '../styles/App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Header from './Header';
import Products from './Products';
import Item from './Item';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <Header/>
        <main>
            <Switch>
              <Route exact path="/my-profile" component={MyProfile} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/products" component={Products}/>
              <Route exact path="/goods" component={Products} />
              <Route exact path="/products/:id" component={Item} />
              <Route path="/" component={Home} />
            </Switch>
        </main>
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
