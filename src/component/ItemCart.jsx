import React from 'react'
import { useCartContext } from '../context/CartContext'

const ItemCart = ({product}) => {
   const {removePoduct} = useCartContext ();
  return (
    <div>
        <img src="" alt="" srcset="" />
        <div>
        <p>Titulo:{product.title}</p>
        <p>Cantidad:{product.Quantity}</p>
        <p>Precio:{product.price}</p>
        <p>Subtotal:$ {product.Quantity * product.price} </p>
        <button onClick={() => removePoduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}
