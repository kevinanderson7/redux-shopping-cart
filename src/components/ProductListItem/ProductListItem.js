import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class ProductListItem extends Component {
  addProductToCart = () => {
    console.log(this.props.product);
    // TODO: Dispatch here
    this.props.dispatch({
      type: 'CHECKOUT_ITEMS',
      payload: this.props.product,
    });
  };

  render() {
    return (
      <div>
        <Grid container spacing={6}>
          <Grid item>
            <li>
              {this.props.product.name}: {this.props.product.price}{' '}
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={this.addProductToCart}
              >
                Add to Cart
              </Button>
            </li>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect()(ProductListItem);
