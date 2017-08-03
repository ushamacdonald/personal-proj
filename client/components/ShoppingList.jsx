import React from 'react'
import AppRoutes from './AppRoutes'
import {getShopping} from '../api/api'
import ShoppingListAdd from './ShoppingListAdd'

export default function ShoppingList ({shoppingList, fetchShopping}) {
  const renderShopping = ({id, item, done}) => (
    <li className="shopping_li" key={id}><input type="checkbox" name="check" value="1"/>
             <label className="strikethrough">{item}</label>
    </li>
  )

  return (
    <div className="shoppingContainer">
      <h2>Shopping List</h2>
      <ul className="shopping_list">
        {shoppingList.map(renderShopping)}
      </ul>
      <ShoppingListAdd fetchShopping={fetchShopping} />
    </div>
  )
}
