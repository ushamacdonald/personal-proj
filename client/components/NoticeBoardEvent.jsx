import React from 'react'
import {postEventRequest} from '../api/api'

export default class NoticeBoardEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newEvent: {

      }
    }
  }
  submitEvent(e) {
    e.preventDefault()
    let {newEvent} = this.state
    newEvent.end = newEvent.start
    postEventRequest(newEvent, this.props.fetchNotice)
    this.props.changeFormType('message')
  }
  updateEventDetails(e) {
    let {newEvent} = this.state
    newEvent[e.target.name] = e.target.value
    this.setState({newEvent})
  }
  render() {
    return (
      <form onSubmit={this.submitEvent.bind(this)}>
        <div className="field">
          <div className="control">
            <input onChange={this.updateEventDetails.bind(this)} className="input" type="text" name="title" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input onChange={this.updateEventDetails.bind(this)} className="input" type="date" name="start" />
          </div>
        </div>

        <div className="field is-grouped is-pulled-right">
          <div className="control">
            <input className="button is-primary" type="submit" value="add event" />
          </div>
        </div>
      </form>
    )
  }
}
