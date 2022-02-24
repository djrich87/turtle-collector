import * as turtlesDb from '../data/turtle-db.js'

function index(req, res) {
  res.send('<h1>turtles are cool</h1>')
}

export {
  index
}