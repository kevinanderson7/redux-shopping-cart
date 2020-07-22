import React, { Component } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import { connect } from 'react-redux';

class ProductList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.store.productReducer.map((product, i) => {
            return <ProductListItem key={i} product={product} />;
          })}
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    store: store,
  };
};

export default connect(mapStoreToProps)(ProductList);
