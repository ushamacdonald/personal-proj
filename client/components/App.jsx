import React from 'react'
import Flatties from './Flatties'
import AppRoutes from './AppRoutes'
import {getFlatties, getShopping, getNotice} from '../api/api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      flatties: [],
      shoppingList: [],
      noticeBoard: [],
      errorMessage: ''
    }
    this.fetchFlatties = this.fetchFlatties.bind(this)
  }

  componentWillMount () {
    this.fetchFlatties()
    this.fetchShopping()
    this.fetchNotice()
  }
  setFlatties(err, flatties) {
    this.setState({err, flatties: flatties || []})
  }
  fetchFlatties () {
    getFlatties(this.setFlatties.bind(this))
  }
  setShopping(err, shoppingList) {
    this.setState({err, shoppingList: shoppingList || []})
  }

  fetchShopping () {
    getShopping(this.setShopping.bind(this))
  }
  setNotice(err, noticeBoard) {
    this.setState({err, noticeBoard: noticeBoard || []})
  }

  fetchNotice () {
    getNotice(this.setNotice.bind(this))
  }

  render () {
    return (
      <div className="container">
        <AppRoutes
        flatties={this.state.flatties} fetchFlatties={this.fetchFlatties}
        shoppingList={this.state.shoppingList} fetchShopping={this.fetchShopping.bind(this)}
        noticeBoard={this.state.noticeBoard} fetchNotice={this.fetchNotice.bind(this)}
        />
      {this.state.errorMessage &&
        <h1>{this.state.errorMessage}</h1>
      }
      </div>
    )
  }
}



export default App
