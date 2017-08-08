import React from 'react'
import Flatties from './Flatties'
import ShoppingList from './ShoppingList'
import NoticeBoard from './NoticeBoard'
import AddMovie from './AddMovie'
import {HashRouter as Router, Route} from 'react-router-dom'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from '../events'

BigCalendar.momentLocalizer(moment)

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

class AppRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="appContainer ">
        <Router>
          <div>
            <Route
              exact path='/' render={(props) =>
              <Flatties flatties={this.props.flatties} fetchFlatties={this.props.fetchFlatties} setColour={this.props.setColour}
                />
            }
            />
          <div className="columns">
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
            <div className="column is-6">
              <BigCalendar {...this.props} events={events} views={allViews} defaultDate={new Date(2017, 7, 1)} />
            </div>
          </div>
          <AddMovie />
          </div>
        </Router>
      </div>
    )
  }
}


export default AppRoutes
