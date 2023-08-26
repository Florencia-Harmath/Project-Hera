import { Link } from 'react-router-dom';
import styles from './ProductCart.module.css'

const ProductCart = ({ product }) => {
  return (
    <div className={styles['product-cart']}>
      <img src={product.image} alt={product.name} className={styles['product-image']} />
      <Link to={`/item/${product.id}`}>
        <h3 className={styles['product-name']}>{product.name}</h3>
      </Link>
      <p className={styles['product-price']}>${product.price}</p>
      <button className={styles['product-button']}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCart;
