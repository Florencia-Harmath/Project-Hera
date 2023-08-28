import PropTypes from "prop-types";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <div className={styles['product-container']}>
      <h1 className={styles['product-name']}>{item.name}</h1>
      <img src={item.image} alt={item.name} className={styles['product-image']}/>      
      <p className={styles['product-detalle']}>{item.detalle}</p>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
};

export default ItemDetail;
