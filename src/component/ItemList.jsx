import React from 'react'

export default function ItemList({aux}) {
  return (
    <>
    {aux.map((aux) => (
        <item aux={aux}/>
    ))} 
    </>
  );
}
