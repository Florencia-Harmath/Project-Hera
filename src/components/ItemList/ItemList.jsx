import React from 'react';
import propTypes from 'prop-types';
import ProductCart from '../ProductCart/ProductCart'; 
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'; 
import styles from './ItemList.module.css';

const ItemList = ({ items }) => {
  return (
    <div>
      <p className={styles['parrafo-home']}>En Hera creamos nuestros productos artesanalmente, cuidando cada detalle para un mejor cuidado de la salud y belleza.</p>
      <h2 className={styles['titulo-home']}>Nuestros productos: </h2>      
      <ul>
        <div className={styles['grid-container']}>
          {items.map((item) => (
            <li key={item.id}>
              <ProductCart product={item} />
              <ItemDetailContainer item={item} /> 
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
};

export default ItemList;

