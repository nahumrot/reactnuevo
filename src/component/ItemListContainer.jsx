import React, { useState } from 'react'
import ItemList from './ItemList';

export default function ItemListContainer() {
    let productos=[
        {id:1, name:"Auricular JBL", price:15000},
        {id:2, name:"Vaso Charly", price:5000},
        {id:3, name:"Cable Tipo C", price:500},
        {id:4, name:"Freidora De Aire", price:25000},
    ];

    const miPromesa = new Promise((respuesta,rej) => 
    {setTimeout(() => {
    respuesta(productos);
    },2000);
    });

    const[aux,setAux] = useState([])

    miPromesa.then((respuesta) => {
        setAux(respuesta)
    })

  return < ItemList aux ={aux}/>
    
}
