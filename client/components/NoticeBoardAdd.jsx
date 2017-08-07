import React from 'react'
import {addNotice} from '../api/api'


export default class NoticeBoardAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  updateMessage(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  addMessage(e) {
    e.preventDefault()
    e.target.reset()
    addNotice(this.state, this.props.fetchNotice)

  }

  render() {
    return (
      <form onSubmit={this.addMessage.bind(this)}>

        <div className="field">
          <div className="control">
            <input className="input" type="text" name="message" onChange={this.updateMessage.bind(this)} />
          </div>
        </div>

        <div className="field is-grouped is-pulled-right">
          <div className="control">
            <div className="select">
              <select name="flattie_id" onChange={this.updateMessage.bind(this)}>
                <option selected disabled>Flattie</option>
                  {this.props.flatties.map((flattie, i) => {
                    return <option key={i} value={flattie.id}>{flattie.name}</option>
                  })}
              </select>
            </div>
          </div>
          <div className="control">
            <input className="button is-primary" type="submit" value="add" />
          </div>
        </div>




      </form>
    )
  }
}
