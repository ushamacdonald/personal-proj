import React from 'react'
import Flatties from './Flatties'
import ShoppingList from './ShoppingList'
import {HashRouter as Router, Route} from 'react-router-dom'


class AppRoutes extends React.Component {
  render () {
    return (
      <div className="appContainer">
        <Router>
          <div>
            <Route
              exact path='/' render={(props) =>
              <Flatties flatties={this.props.flatties} fetchFlatties={this.props.fetchFlatties} {...props}
                />
            }
            />
          <Route
            path='/' render={(props) =>
            <ShoppingList shoppingList={this.props.shoppingList} fetchFlatties={this.props.fetchShopping} {...props}
              />
          }
          />
          </div>
        </Router>
      </div>
    )
  }
}


export default AppRoutes
