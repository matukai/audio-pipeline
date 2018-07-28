const bookshelf = require('./Bookshelf');

class Users extends bookshelf.Model {
  get tableName(){return 'users'}
  get hasTimestamps(){ return true }

  threads(){
    return this.hasMany('Threads');
  }

}

module.exports = bookshelf.model('Users',Users);