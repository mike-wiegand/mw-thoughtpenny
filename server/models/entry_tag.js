const bookshelf = require("../bookshelf")
  
  const Entry_Tag = bookshelf.model('Entry_Tag', {
    tableName: 'entries_tags',
    // entry() {
    //   return this.belongsToMany('Entry')
    // },
    // tag() {
    //     return this.belongsToMany('Tag')
    //   }
  })

  module.exports = Entry_Tag