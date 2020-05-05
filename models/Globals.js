const { Model } = require('objection');
const knex = require('./../db/knex');

Model.knex(knex)

class GlobalsModel extends Model {
  static get tableName() {
    return 'globals';
  }

  static get idColumn() {
    return 'name';
  }

}

module.exports = GlobalsModel;
