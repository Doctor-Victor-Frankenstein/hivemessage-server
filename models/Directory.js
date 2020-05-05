const { Model } = require('objection');
const knex = require('./../db/knex');

Model.knex(knex)

class DirectoryModel extends Model {
  static get tableName() {
    return 'directory';
  }

  static get idColumn() {
    return 'id';
  }

}

module.exports = DirectoryModel;
