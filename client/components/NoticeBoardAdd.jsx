import React from 'react'
import {addNotice} from '../api/api'
import NoticeBoardMessage from './NoticeBoardMessage'
import NoticeBoardEvent from './NoticeBoardEvent'


export default class NoticeBoardAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: "message"
    }
  }
  changeFormType(type) {
    console.log({type});
    this.setState({type: type})
  }
  render() {
    console.log("rerender");
    return (
      <div>
        <form >
          <div className="field">
            <div className="control">
              <div className="select">
                <select onChange={(e) => this.changeFormType(e.target.value)}>
                  <option selected={this.state.type == "message"} value={"message"}>Message</option>
                  <option selected={this.state.type == "event"} value={"event"}>Event</option>
                </select>
              </div>
            </div>
          </div>
        </form>
          {this.state.type === "message"
            ? <NoticeBoardMessage fetchNotice={this.props.fetchNotice} flatties={this.props.flatties} />
          : <NoticeBoardEvent changeFormType={this.changeFormType.bind(this)} fetchNotice={this.props.fetchNotice}/>
          }
      </div>
    )
  }
}
