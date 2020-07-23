import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ProductForm extends Component {
  // You will need to keep this state in this component
  // if you're only using something in one component,
  // you do not need to move it to redux
  state = {
    productToAdd: { name: '', price: 0 },
  };

  handlePriceChange = (event) => {
    this.setState({
      productToAdd: {
        ...this.state.productToAdd,
        price: Number(event.target.value),
      },
    });
  };

  handleNameChange = (event) => {
    this.setState({
      productToAdd: {
        ...this.state.productToAdd,
        name: event.target.value,
      },
    });
  };

  addProduct = (event) => {
    event.preventDefault();
    // TODO: Dispatch here
    this.props.dispatch({
      type: 'ADD_NEW_PRODUCT',
      payload: this.state.productToAdd,
    });
    // this.props.addNewProduct(this.state.productToAdd);
  };

  render() {
    return (
      <form onSubmit={this.addProduct}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <TextField
              label="Name"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              onChange={this.handleNameChange}
              type="text"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Price"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              onChange={this.handlePriceChange}
              type="text"
            />
          </Grid>
          <input type="submit" value="Submit" />
        </Grid>
      </form>
    );
  }
}

export default connect()(ProductForm);
