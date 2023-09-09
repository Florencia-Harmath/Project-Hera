import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import styles from './Cart.module.css';

const Cart = () => {
    const { cart, addItem, removeItem } = useContext(CartContext);

    return (
        <div>
            <h2 className={styles['h2-cart']}>Tu carrito</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id} className={styles['li-cart']}>
                        <div>
                            <img className={styles['img-cart']} src={item.image} alt={item.name} />
                        </div>
                        <div>
                            <h3 className={styles['name-cart']}>{item.name}</h3>
                        </div>
                        <div>
                        <p className={styles['price-cart']}>Precio: ${item.price}</p>
                            <p className={styles['cant-cart']}>Cantidad: {item.quantity}</p>
                            <ItemCount className={styles['count-cart']}
                                stock={item.stock}
                                initial={item.quantity}
                                onAdd={(quantity) => addItem(item, quantity)}
                                onRemove={() => removeItem(item.id)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;

