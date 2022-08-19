import React from 'react';
import {Link} from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCart from '../component/ItemCart'


const cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (cart.length === 0){
        return(
            <>
            <p>No hay productos en el carrito</p>
            <link to='/'> Realizar la compra </link>
            </>
        );
    }

  return (
    <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p>
            total: {totalPrice()}
        </p>
    </>
  )
}
