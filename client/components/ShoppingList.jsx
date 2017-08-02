import React from 'react'
import AppRoutes from './AppRoutes'
import {getShopping} from '../api/api'

export default function ShoppingList ({shoppingList}) {
  const renderShopping = ({item}) => (
    <li>{item}</li>
  )

  return (
    <div className="shoppingContainer">
      <h2>Shopping List</h2>
      <ul>
        {shoppingList.map(renderShopping)}
      </ul>
    </div>
  )
}
