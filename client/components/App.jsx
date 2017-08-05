import React from 'react'
import Flatties from './Flatties'
import AppRoutes from './AppRoutes'
import {getMovie, getFlatties, getShopping, getNotice, fetchDeleteItem} from '../api/api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      flatties: [],
      shoppingList: [],
      noticeBoard: [],
      errorMessage: '',
      // movie: {results:[]}
    }
    this.fetchFlatties = this.fetchFlatties.bind(this)
  }

  componentDidMount() {
    getMovie((data) => {
      let movie = data.results[0]
      console.log(movie)
    })
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

  deleteItem (id) {
    fetchDeleteItem(id, this.fetchShopping.bind(this))
  }

  setColour(button) {
        var property = document.getElementById(button);
        if (count == 0) {
            property.style.backgroundColor = "#FFFFFF"
            count = 1;
        }
        else {
            property.style.backgroundColor = "#7FFF00"
            count = 0;
        }
    }

  render () {
    return (
      <div className="container">
        <div>
          {this.state.movie}
        </div>
        <AppRoutes
        flatties={this.state.flatties} fetchFlatties={this.fetchFlatties}
        shoppingList={this.state.shoppingList} fetchShopping={this.fetchShopping.bind(this)} deleteItem={this.deleteItem.bind(this)}
        noticeBoard={this.state.noticeBoard} fetchNotice={this.fetchNotice.bind(this)}
        setColour={this.state.setColour}
        />
      {this.state.errorMessage &&
        <h1>{this.state.errorMessage}</h1>
      }
      </div>
    )
  }
}



export default App
