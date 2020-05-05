const { Model } = require('objection');
const knex = require('./../db/knex');

Model.knex(knex)

class RoomsModel extends Model {
  static get tableName() {
    return 'rooms';
  }

  static get idColumn() {
    return 'id';
  }

}

module.exports = RoomsModel;
