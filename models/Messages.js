const { Model } = require('objection');
const knex = require('./../db/knex');

Model.knex(knex)

class MessagesModel extends Model {
  static get tableName() {
    return 'messages';
  }

  static get idColumn() {
    return 'id';
  }

}

module.exports = MessagesModel;
