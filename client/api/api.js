import request from 'superagent'

export function getFlatties () {
  return request.get('/v1/flatties')
    .then(data => {
      const flatties = data.body
      console.log(data.body)
      return flatties.map(flat => {
        return Object.assign(
          {},
          flat,
          { name: JSON.parse(flat.name) }
        )
      })
    })
    .catch(err => {
      throw Error('Cannot GET Flatties!')
    })
}
