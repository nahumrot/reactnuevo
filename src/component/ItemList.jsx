import React from 'react'
import item from './Item.jsx'

export default function ItemList({aux}) {
  return (
    <>
    {aux.map((aux) => (
        <item aux={aux}/>
    ))} 
    </>
  );
}
