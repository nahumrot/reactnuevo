import React, {useState} from 'react';
import ItemCount from "./ItemCount";
import { useCartContext } from '../context/CartContext';

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState (false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart (true);
        addProduct(data,quantity);
    }

    return (
        <div className='container' > 
             <div className='detail' > 
                <img src={data.img} alt="" />
                <div>
                    <h1>{data.titulo}</h1>
                    {
                        goToCart
                        ? <link> Terminar compra </link>
                        : <itemCount initial={3} stock={5} onAdd={onAdd} />
                    }
                </div>
             </div>
        </div>
       
      );
}

export default ItemDetail
