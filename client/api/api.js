import request from 'superagent'

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
  console.log(item);
  request
    .post('/v1/flatties/shopping')
    .send({item})
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}
