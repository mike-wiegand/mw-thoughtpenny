const bookshelf = require("../bookshelf")
  
  const Entry = bookshelf.model('Entry', {
    tableName: 'entries',
    tags() {
      return this.belongsToMany('Tag')
    }
  })

  module.exports = Entry