import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { FaTrash } from 'react-icons/fa';
import styles from './Cart.module.css';

const Cart = () => {
    const { cart, addItem, removeItem, clearCart } = useContext(CartContext);

    const isEmpty = cart.length === 0;

    return (
        <div>
            <h2 className={styles['h2-cart']}>Tu carrito</h2>
            {isEmpty ? (
                <div>
                    <p className={styles['empty-cart-p']}>Tu carrito está vacio!</p>
                    <Link to="/"><button className={styles['empty-cart-btn']}> Ver productos  </button></Link>
                </div>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className={styles['li-cart']}>
                                <div>
                                    <img className={styles['img-cart']} src={item.image} alt={item.name} />
                                </div>
                                <div>
                                    <h3 className={styles['name-cart']}>{item.name}</h3>
                                </div>
                                <div className={styles['info-cart']}>
                                    <p className={styles['price-cart']}>Precio: ${item.price}</p>
                                    <p className={styles['cant-cart']}>Cantidad: {item.quantity}</p>
                                    <FaTrash className={styles['delete-icon']} onClick={() => removeItem(item.id)} />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button className={styles['vaciar-cart']} onClick={() => clearCart()}>Vaciar carrito</button>
                        <Link to="/checkout">
                            <button className={styles['comprar-cart']}>Realizar compra</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;



