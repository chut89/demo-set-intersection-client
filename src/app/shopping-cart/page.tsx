'use client';

import { useState } from 'react';

import './shopping-cart.css';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(prod => prod.id == productId ? {...prod, count: prod.count + 1} : prod));
  }

  function handleDecreaseClick(productId) {
    const product = products.find(prod => prod.id == productId);
    if (product.count == 1) {
      setProducts(products.filter(prod => prod.id != productId));
    } else if (product.count > 1) {
      setProducts(products.map(prod => prod.id == productId ? {...prod, count: prod.count - 1} : prod));
    } else {
      throw Error('Invalid state: Count < 1');  
    }
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleDecreaseClick(product.id);
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}

