const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/todo-list'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log(`mongodb error@${MONGODB_URI}`)
})
db.once('open', () => {
  console.log(`mongodb connected@${MONGODB_URI}!`)
})

module.exports = db