const bookshelf = require('./Bookshelf');

class Subgenres extends bookshelf.Model {
  get tableName(){return 'subgenres'}
  get hasTimestamps(){ return true }

  genre(){
    return this.hasMany('Subgenres')
  }
}

module.exports = bookshelf.model('Subgenres',Subgenres);