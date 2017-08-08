import React from 'react'
import {addNotice} from '../api/api'
import NoticeBoardMessage from './NoticeBoardMessage'
import NoticeBoardEvent from './NoticeBoardEvent'


export default class NoticeBoardAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMessage: true
    }
  }
  changeFormType(e) {
    this.setState({isMessage: e.target.value})
  }
  render() {
    return (
      <div>
        <form >
          <div className="field">
            <div className="control">
              <div className="select">
                <select onChange={this.changeFormType.bind(this)}>
                  <option selected value={true}>Message</option>
                  <option value={false}>Event</option>
                </select>
              </div>
            </div>
          </div>
        </form>
          {this.state.isMessage == true
            ? <NoticeBoardMessage fetchNotice={this.props.fetchNotice} flatties={this.props.flatties} />
          : <NoticeBoardEvent fetchNotice={this.props.fetchNotice}/>
          }
      </div>
    )
  }
}
