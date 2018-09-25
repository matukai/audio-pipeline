const bookshelf = require('./Bookshelf');

class Threads extends bookshelf.Model {
  get tableName(){return 'threads'}
  get hasTimestamps(){ return true }

  users(){
    return this.belongsTo('Users');
  }

  subgenres(){
    return this.belongsTo('Subgenres');
  }

  comments() {
    return this.hasMany('Comments');
  }

}

module.exports = bookshelf.model('Threads',Threads);