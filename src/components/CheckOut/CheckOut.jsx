import React, { useState } from 'react';
import styles from './CheckOut.module.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

function CheckOut() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    paymentMethod: 'creditCard',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { clearCart, cart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const handleOrderId = (id) => {
  setOrderId(id);
};


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createOrder = () => {
    const orderData = {
      buyer: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
      },
      products: cart.map((item) => ({
        name: item.name,
        id: item.id,
        price: item.price,
        quantity: item.quantity,
      })),
      total: calculateTotal(),
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, orderData)
      .then((docRef) => {
        console.log("orden creada con id: ", docRef.id);
        handleOrderId(docRef.id);
      })
      .catch((error) => {
        console.log("Error al crear la orden");
      });

    clearCart();

    setIsFormSubmitted(true);

  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder();
  };

  return (
    <div className={styles['container']}>
      <h2 className={styles['title']}>Finalizar compra</h2>
      {isFormSubmitted ? (
        <div>
          <p>¡Compra exitosa! Código de seguimiento: {orderId}</p>
          <Link to="/">
            <button className={styles['boton-volver']}>Volver</button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles['form']}>
          <div className={styles['form-group']}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="phone">Telefono:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="address">Dirección de Envío:</label>
            <input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="paymentMethod">Método de Pago:</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="creditCard">Tarjeta de Crédito</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <button type="submit" className={styles['submit-button']}>
            Finalizar Compra
          </button>

          <Link to="/"><button className={styles['boton-volver-form']}> Volver </button></Link>
        </form>
      )}
    </div>
  );
}

export default CheckOut;
