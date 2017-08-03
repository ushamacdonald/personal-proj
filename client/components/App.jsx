import React from 'react'
import Flatties from './Flatties'
import AppRoutes from './AppRoutes'
import { getFlatties } from '../api/api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      flatties: [],
      errorMessage: ''
    }
    this.fetchFlatties = this.fetchFlatties.bind(this)
  }

  componentWillMount () {
    this.fetchFlatties()
  }
  setFlatties(err, flatties) {
    console.log({err, flatties});
    this.setState({err, flatties: flatties || []})
  }
  fetchFlatties () {
    getFlatties(this.setFlatties.bind(this))
  }

  render () {
    return (
      <div className="container">
        <AppRoutes flatties={this.state.flatties}
        fetchFlatties={this.fetchFlatties}
      />
      {this.state.errorMessage &&
        <h1>{this.state.errorMessage}</h1>
      }
      </div>
    )
  }
}



export default App
