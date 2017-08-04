import React from 'react'
import Flatties from './Flatties'
import ShoppingList from './ShoppingList'
import NoticeBoard from './NoticeBoard'
import {HashRouter as Router, Route} from 'react-router-dom'


class AppRoutes extends React.Component {
  render () {
    return (
      <div className="appContainer">
        <Router>
          <div>
            <Route
              exact path='/' render={(props) =>
              <Flatties flatties={this.props.flatties} fetchFlatties={this.props.fetchFlatties} setColour={this.props.setColour}
                />
            }
            />
            <Route
              path='/' render={(props) =>
              <ShoppingList shoppingList={this.props.shoppingList} fetchShopping={this.props.fetchShopping} deleteItem={this.props.deleteItem}
                />
            }
            />
            <Route
              path='/' render={(props) =>
              <NoticeBoard noticeBoard={this.props.noticeBoard} fetchNotice={this.props.fetchNotice} flatties={this.props.flatties}
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
