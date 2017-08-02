import React from 'react'
import Flatties from './Flatties'
import {HashRouter as Router, Route} from 'react-router-dom'


class AppRoutes extends React.Component {
  render () {
    return (
      <div className="appContainer">
        <Router>
          <Route
            exact path='/'
            render={(props) =>
              <Flatties flatties={this.props.flatties} fetchFlatties={this.props.fetchFlatties} {...props}
              />
            }
          />
        </Router>
      </div>
    )
  }
}


export default AppRoutes
