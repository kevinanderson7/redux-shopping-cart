import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
  handleCheckout = () => {
    // TODO: Clear the cart and navigate to the product page
    this.props.dispatch({
      type: 'CLEAR_CART',
    });
  };

  render() {
    return (
      <div>
        <h2>Checkout</h2>
        {/* TODO: Display items in the cart */}
        {this.props.store.checkoutReducer.map((item, index) => {
          return (
            <p key={index}>
              {item.name} {item.price}
            </p>
          );
        })}

        <button onClick={this.handleCheckout}>Checkout</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store: store,
  };
};

export default connect(mapStoreToProps)(Checkout);
