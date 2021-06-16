// const Promise = require('bluebird')
// const bcrypt = Promise.promisifyAll(require('bcrypt'))

// const Entry = bookshelf.model('Entry', {
//     tableName: 'entries',
//     Tags() {
//       return this.belongsToMany('Tag')
//     }
//   })
  
//   const Tag = bookshelf.model('Tag', {
//     tableName: 'Tags',
//     Entries() {
//       return this.belongsToMany('Entry')
//     }
//   })

const knex =
  process.env.NODE_ENV === 'production'
    ? require('knex')(require('./knexfile').production)
    : require('knex')(require('./knexfile').development);
const bookshelf = require('bookshelf')(knex);
module.exports = bookshelf;