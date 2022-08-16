import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'


export default function Item({aux}) {
  return (
    <div>{JSON.stringify(aux)}</div>
  )
}
