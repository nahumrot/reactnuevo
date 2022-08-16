import React, { useEffect, useState } from 'react';
import ItemDetail from '../component/ItemDetail';
import imagen1 from '../../imagenes/jbl'

const producto = [{
  id:1,
  titulo: "Auricular JBL",
  precio: 9000,
  detalles: "La bateria dura 40 horas, tiene microfono incorporado y un sonido superior que lo hace unico.",
  img: <img src={imagen1} alt="" srcset="" />
  
}];

export default function ItemDetailContainer() {
  const[data,setData] = useState({});

  useEffect(() =>{
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(producto);
      }, 2000)
    });
    getData.then(res=>setData(res));
  }, [] )

  return (
    < ItemDetail data={data} />   
)}
