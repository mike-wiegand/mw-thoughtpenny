const bookshelf = require("../bookshelf")

const Tag = bookshelf.model('Tag', {
    tableName: 'tags',
    entries() {
      return this.belongsToMany('Entry')
    }
  })
  

  module.exports = Tag