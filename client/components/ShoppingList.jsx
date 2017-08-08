import React from 'react'
import AppRoutes from './AppRoutes'
import {getShopping} from '../api/api'
import ShoppingListAdd from './ShoppingListAdd'

export default function ShoppingList ({shoppingList, fetchShopping, deleteItem}) {
  const renderShopping = ({id, item, done}) => (
    <li className="shopping_li" key={id}>
      <input type="checkbox" name="check" value={id}/> <label className="strikethrough">{item}</label> <a href='#' onClick={() => deleteItem(id)}>x</a>
    </li>
  )

  return (
    <div className="shoppingContainer column is-6">
      <h2 className="title is-2">Shopping List</h2>
      <ul className="shopping_list">
        {shoppingList.map(renderShopping)}
      </ul>
      <ShoppingListAdd fetchShopping={fetchShopping} />
    </div>
  )
}
