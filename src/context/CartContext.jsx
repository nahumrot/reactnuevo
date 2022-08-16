import React, {useState, useContext} from 'react'
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext (CartContext);

const CartProvider = ({children}) => {
  const [cart,setCart] = useState([]);

  const addProduct = (item, Quantity) => {
    if (isInCart(item.id)){
      setCart(cart.map(product => {
        return product.id === item.id ? {...product, Quantity: product.Quantity + Quantity} : product
      }));
    } else {
      setCart ([...cart, {...item,Quantity}]);
    }
  }

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

  const removePoduct = (id) => setCart(cart.filter(product => product.id !== id ));

  return (
    <CartContext.Provider value= {{
      clearCart,
      isInCart,
      removePoduct,
      addProduct
    }}>
        {children}
    </CartContext.Provider>
  )
}
