import React from 'react'

export const ItemDetail = ({data}) => {
    return (
        <div className='container' > 
             <div className='detail' > 
                <img src={data.img} alt="" />
                <div>
                    <h1>{data.titulo}</h1>
                </div>
             </div>
        </div>
       
      );
}

export default ItemDetail
