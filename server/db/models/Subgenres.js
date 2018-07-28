const bookshelf = require('./Bookshelf');

class Subgenres extends bookshelf.Model {
  get tableName(){return 'subgenres'}
  get hasTimestamps(){ return true }

  threads(){
    return this.hasMany('Threads')
  }  
  genres(){
    return this.belongsTo('Genres')
  }
}

module.exports = bookshelf.model('Subgenres',Subgenres);