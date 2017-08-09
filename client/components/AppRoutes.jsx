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
      <div className="appContainer container ">
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
              <NoticeBoard noticeBoard={this.props.noticeBoard} events={this.props.events} fetchNotice={this.props.fetchNotice} flatties={this.props.flatties}
                />
            }
            />
        </div>
          <div className="columns">
            <div className="column cal_container">
              <h2 className="title is-2 cal_header">Calendar</h2>
              <BigCalendar {...this.props} events={this.props.events} views={allViews} defaultDate={new Date()} />
            </div>
          </div>
          </div>
        </Router>
      </div>
    )
  }
}


export default AppRoutes
