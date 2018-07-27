const bookshelf = require('./Bookshelf');

class Genres extends bookshelf.Model {
  get tableName(){return 'genres'}
  get hasTimestamps(){ return true }
}