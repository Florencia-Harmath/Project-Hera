import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ notificationCount }) => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size="lg" />
      {notificationCount > 0 && <span className="notification">{notificationCount}</span>}
    </div>
  );
};

export default CartWidget;
