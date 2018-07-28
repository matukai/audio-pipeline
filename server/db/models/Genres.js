const bookshelf = require('./Bookshelf');

class Genres extends bookshelf.Model {
  get tableName(){return 'genres'}
  get hasTimestamps(){ return true }
  
  subgenres(){
    return this.belongsTo('Genres')
  }

}

module.exports = bookshelf.model('Genres',Genres);