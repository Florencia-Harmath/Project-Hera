import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = ({ notificationCount }) => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      {notificationCount > 0 && <span className="notification">{notificationCount}</span>}
    </div>
  );
};

export default CartWidget;