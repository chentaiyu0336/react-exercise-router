import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
  render () {
    return (
      <div>
        <h3>All Products:</h3>
        <div >
          <Link className="productLink" to='/products/1'>Bicycle</Link>
        </div>
        <div>
          <Link className="productLink" to='/products/2'>TV</Link>
        </div>
        <div>
          <Link className="productLink" to='/products/3'>Pencil</Link>
        </div>
        
      </div>
    );
  }
}

export default Products;