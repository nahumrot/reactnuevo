import React, {useState} from 'react'


export default function ItemCount() {
    const[count,setCount] = useState(1);

    const decrece = () => {
        setCount(count - 1 );
    }

    const crece = () => {
        setCount(count + 1 );
    }

  return (
    <div>
        <buttom disabled={count <= 1} onClick={decrece}> - </buttom>
        <span>{count}</span>
        <buttom disabled={count >= 5} onClick={crece}> + </buttom>
        <div>
            <button>Agregar al carrito</button>
        </div>
    </div>
  )
}
