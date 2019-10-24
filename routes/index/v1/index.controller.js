const indexService = require('./index.service')

module.exports = function(app) {
  app.get('/api/v1/', index)
}

// index controller impl.
const index = (req, res, next) => {
  indexService.getIndex()
  .then(index => index ? res.status(200).json(index) : res.status(404).json({ message : 'index not found.' }))
  .catch(err => {next(err)})
}
