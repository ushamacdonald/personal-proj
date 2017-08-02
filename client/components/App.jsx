import React from 'react'
import Flatties from './Flatties'
import AppRoutes from './AppRoutes'
import {getFlatties, getShopping} from '../api/api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      flatties: [],
      shoppingList: [],
      errorMessage: ''
    }
    this.fetchFlatties = this.fetchFlatties.bind(this)
  }

  componentWillMount () {
    this.fetchFlatties()
    this.fetchShopping()
  }
  setFlatties(err, flatties) {
    // console.log({err, flatties});
    this.setState({err, flatties: flatties || []})
  }
  fetchFlatties () {
    getFlatties(this.setFlatties.bind(this))
  }
  setShopping(err, shoppingList) {
    // console.log(shoppingList);
    this.setState({err, shoppingList: shoppingList || []})
  }

  fetchShopping () {
    getShopping(this.setShopping.bind(this))
  }

  render () {
    return (
      <div className="container">
        <AppRoutes
        flatties={this.state.flatties} fetchFlatties={this.fetchFlatties}
        shoppingList={this.state.shoppingList} fetchShopping={this.fetchShopping.bind(this)}
        />
      {this.state.errorMessage &&
        <h1>{this.state.errorMessage}</h1>
      }
      </div>
    )
  }
}



export default App
