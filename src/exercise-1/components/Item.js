import React, { Component } from 'react';

class Item extends Component {
  state = {
    product: [
      {
        id: 1,
        name: "Bicycle",
        price: 30,
        quantity: 15,
        desc: "Bicycle is Good"
      },
      {
        id: 2,
        name: "TV",
        price: 40,
        quantity: 16,
        desc: "TV is good"
      }, 
      {
        id: 3,
        name: "Pencil",
        price: 50,
        quantity: 17,
        desc: "Pencil is good"
      }
    ]
  }
    
    render() {
      const index = this.props.match.params.id;
      return (
        <div>
          <h3>Product Details:</h3>
          <p>Name: {this.state.product[index - 1].name}</p>
          <p>Id: {this.state.product[index - 1].id}</p>
          <p>Price: {this.state.product[index - 1].price}</p>
          <p>Quantity: {this.state.product[index - 1].quantity}</p>
          <p>Desc: {this.state.product[index - 1].desc}</p>
        </div>
      );
    }
}

export default Item;