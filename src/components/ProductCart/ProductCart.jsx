import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import styles from './ProductCart.module.css';
import ItemCount from '../ItemCount/ItemCount';

const ProductCart = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [quantityToAdd, setQuantityToAdd] = useState(1);

  const handleAddToCart = () => {
    addItem(product, quantityToAdd);
  };


  return (
    <div className={styles['product-cart']}>
      <img src={product.image} alt={product.name} className={styles['product-image']} />
      <Link to={`/item/${product.id}`}>
        <h3 className={styles['product-name']}>{product.name}</h3>
      </Link>
      <p className={styles['product-price']}>${product.price}</p>
      <ItemCount
        initial={1}
        stock={product.stock}
        quantity={quantityToAdd}
        onChange={setQuantityToAdd}
      />

      <button className={styles['btn-agregar']} onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCart;

