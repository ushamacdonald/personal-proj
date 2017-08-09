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
      events: [],
      errorMessage: '',

      // movie: {results:[]}
    }
    this.fetchFlatties = this.fetchFlatties.bind(this)

  }


  formatDate(stringDate) {
    let start = stringDate.start.split('-')
    stringDate.og = [...start].join('-')
    start = new Date([...start])
    stringDate.start = start
    stringDate.end = start
    return stringDate
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

  setNotice(err, {noticeBoard, events}) {
    events = events.map(this.formatDate)
    console.log({noticeBoard, events});
    this.setState({err, noticeBoard: noticeBoard || [], events: events || []})
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
      <div className="container app-container">
        <section className="section app-body">
          <AppRoutes
          flatties={this.state.flatties} fetchFlatties={this.fetchFlatties}
          shoppingList={this.state.shoppingList} fetchShopping={this.fetchShopping.bind(this)} deleteItem={this.deleteItem.bind(this)}
          noticeBoard={this.state.noticeBoard} fetchNotice={this.fetchNotice.bind(this)}
          setColour={this.state.setColour}
          events={this.state.events}
          />
        </section>
      {this.state.errorMessage &&
        <h1>{this.state.errorMessage}</h1>
      }
      </div>
    )
  }
}



export default App
