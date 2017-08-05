import React from 'react'
import {getMovie} from '../api/api'

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie_name: '',
      movieData: null,
      foundMovie: false
    }
  }
  getResult(err, movieData) {
    this.setState({movieData:movieData.results[0], foundMovie: true})
  }
  updateSearch(e) {
    this.setState({movie_name: e.target.value})
  }
  searchMovie(e) {
    e.preventDefault()
    e.target.reset()
    getMovie(this.state.movie_name, this.getResult.bind(this))
  }
  render() {
    let {movieData, foundMovie} = this.state
    console.log({movieData});
    return (
      <div className="addMovie">
        {foundMovie==true && <div className="potential movie">
          <h1>{movieData.original_title}</h1>
          <img src={movieData.poster_path} />
        </div>}
        <form onSubmit={this.searchMovie.bind(this)}>
          <input name="movie_name" placeholder="movie title" onChange={this.updateSearch.bind(this)}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}
