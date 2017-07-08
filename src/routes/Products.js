import React from 'react';
import { connect } from 'dva';
import { Router, Route, History, Link } from 'dva/router';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
        <Link to="/">Back to Home</Link>
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);