const bookshelf = require('./Bookshelf');

class Threads extends bookshelf.Model {
  get tableName(){return 'threads'}
  get hasTimestamps(){ return true }
}

module.exports = bookshelf.model('Threads',Threads);