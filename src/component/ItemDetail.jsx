import React, {useState} from 'react';
import itemCount from './ItemCount';

export const ItemDetail = ({data}) => {
    
    const [goToCart, setGoToCart] = useState (false);

    const onAdd = (quantity) => {
        setGoToCart (true);
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
