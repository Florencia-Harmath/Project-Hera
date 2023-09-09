import { useState } from 'react';
import styles from './ItemCount.module.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = ()=> {
        if (quantity < stock) {
            setQuantity(quantity+1);
        }
    }

    const decrement = ()=> {
        if (quantity > 1) {
            setQuantity(quantity-1);
        }
    }

    return (
        <div className={styles['counter']}>
            <div className={styles['controls']}>
                <button className={styles['btn-controls']} onClick={decrement}> - </button>
                <h4 className={styles['number']}>{quantity}</h4>
                <button className={styles['btn-controls']} onClick={increment} > + </button>
            </div>
        </div>
    )
}

export default ItemCount;