import React, {Component} from 'react';
import '../styles/App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <Header/>
        <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/my-profile" component={MyProfile} />
              <Route exact path="/about-us" component={AboutUs} />
            </Switch>
        </main>
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
