import PropTypes from "prop-types";
import styles from "./ItemDetail.module.css";
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <div className={styles['product-container']}>
      <h1 className={styles['product-name']}>{item.name}</h1>
      <img src={item.imageId} alt={item.title} className={styles['product-image']} />
      <p className={styles['product-detalle']}>{item.description}
        <Link to="/">
          <button className={styles['btn-volver']}>Volver</button>
        </Link>
      </p>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
};

export default ItemDetail;
