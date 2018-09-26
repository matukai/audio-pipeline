const bookshelf = require('./Bookshelf');

class Comments extends bookshelf.Model {
  get tableName(){return 'comments'}
  get hasTimestamps(){ return true }

  threads() {
    return this.belongsTo('Threads','Users');
  }

  users() {
    return this.belongsTo('Users');
  }

}

module.exports = bookshelf.model('Comments',Comments);