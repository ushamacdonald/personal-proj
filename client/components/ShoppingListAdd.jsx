import React from 'react'
import {addShopping} from '../api/api'

export default class ShoppingListAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {},
    }
  }

  updateSearch(event) {
    this.setState({item: event.target.value})
  }

  addItem(e) {
    if (e)
      e.preventDefault()
      console.log("hi");
    addShopping(this.state.item, this.props.fetchShopping)

  }

  render() {
    return (
      <form onSubmit={this.addItem.bind(this)}>
        <input type="text" name="item" onChange={this.updateSearch.bind(this)} />
        <input type="submit" value="add" />
      </form>
    )
  }

}
