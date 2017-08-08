import request from 'superagent'


export function getMovie (movie_name, callback) {
  console.log({movie_name});
  request
    .get('https://api.themoviedb.org/3/search/movie')
    .query({
      // with_genres: 18,
      query: movie_name,
      sort_by: 'vote_average.desc',
      api_key: 'd525f9f9d33e5e0eb93d55918d54b51e',
      language: "en-US"
    })
    .end((err, res) => {
      // console.log(res.body);
      callback(err, res.body)
    })
}

export function getFlatties (callback) {
  request
    .get('/v1/flatties')
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}

export function getShopping (callback) {
  request
    .get('/v1/flatties/shopping')
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}

export function addShopping (item, callback) {
  request
    .post('/v1/flatties/shopping')
    .send({item})
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}

export function getNotice (callback) {
  request
    .get('/v1/flatties/notice')
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}

export function addNotice (message, callback) {
  request
    .post('/v1/flatties/notice')
    .send({message})
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}

export function fetchDeleteItem (id, callback) {
  request
    .delete('/v1/flatties/shopping/' + id)
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}

export function postEventRequest (newEvent, callback) {
  request
    .post('/v1/flatties/events')
    .send(newEvent)
    .end((err, res) => {
      if (err) callback(err)
      else callback(null)
    })
}
