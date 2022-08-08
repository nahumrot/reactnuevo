import React from 'react'
import Item from './Item';

export default function ItemList({aux}) {
  return (
    <>
    {aux.map((aux) => (
        <item aux={aux}/>
    ))} 
    </>
  );
}
