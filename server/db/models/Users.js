const bookshelf = require('./Bookshelf');

class Users extends bookshelf.Model {
  get tableName(){return 'users'}
  get hasTimestamps(){ return true }
}

module.exports = bookshelf.model('Users',Users);