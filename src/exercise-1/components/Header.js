import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/my-profile">My Profile</Link>
        <Link to="/about-us">About Us</Link>
      </div>
    );
  }
}

export default Header;