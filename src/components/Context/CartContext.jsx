import { createContext, useState } from "react";

export const CartContext = createContext ({
    cart: []
}) 

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        const itemIndex = updatedCart.findIndex((item) => item.id === itemId);
    
        if (itemIndex !== -1) {
          if (updatedCart[itemIndex].quantity === 1) {
            updatedCart.splice(itemIndex, 1);
          } else {
            updatedCart[itemIndex].quantity -= 1;
          }
        }
    
        return updatedCart;
      });
    };
    

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}