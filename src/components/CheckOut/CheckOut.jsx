import React, { useState } from 'react';
import styles from './CheckOut.module.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

function CheckOut() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    paymentMethod: 'creditCard',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { clearCart } = useContext(CartContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  return (
    <div className={styles['container']}>
      <h2 className={styles['title']}>Finalizar compra</h2>
      {isFormSubmitted ? (
        <div>
          <p>¡Compra exitosa! ¡Gracias por confiar en nosotros!</p>
          <Link to="/">
            <button className={styles['boton-volver']}>Volver</button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles['form']}>
          <div className={styles['form-group']}>
            <label htmlFor="firstName">Nombre:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
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
          <button type="submit" className={styles['submit-button']} onClick={() => clearCart()}>
            Finalizar Compra
          </button>
          <Link to="/"><button className={styles['boton-volver-form']}> Volver </button></Link>
        </form>
      )}
    </div>
  );
}

export default CheckOut;


