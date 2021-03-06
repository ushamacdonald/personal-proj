import React from 'react'
import {addShopping} from '../api/api'

export default class ShoppingListAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: '',
    }
  }

  updateItem(event) {
    this.setState({item: event.target.value})
  }

  addItem(e) {
    e.preventDefault()
    addShopping(this.state.item, this.props.fetchShopping)
    this.setState({
      item:''
    })
  }

  render() {
    return (

      <form onSubmit={this.addItem.bind(this)}>
        <div className="field">
          <div className="control">
            <input className="input" type="text" name="item" value={this.state.item} onChange={this.updateItem.bind(this)} />
          </div>
        </div>
        <div className="field">
          <div className="control is-pulled-right">
            <input className="button is-primary" type="submit" value="add" />
          </div>
        </div>
      </form>
    )
  }

}
