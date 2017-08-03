import React from 'react'
import AppRoutes from './AppRoutes'
import {getShopping} from '../api/api'
import ShoppingListAdd from './ShoppingListAdd'

export default function ShoppingList ({shoppingList, fetchShopping}) {
  const renderShopping = ({id, item}) => (
    <li key={id}>{item}</li>
  )

  return (
    <div className="shoppingContainer">
      <h2>Shopping List</h2>
      <ul>
        {shoppingList.map(renderShopping)}
      </ul>
      <ShoppingListAdd fetchShopping={fetchShopping} />
    </div>
  )
}
