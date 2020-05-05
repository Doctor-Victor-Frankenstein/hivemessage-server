const { Model } = require('objection');
const knex = require('./../db/knex');

Model.knex(knex)

class ChannelsModel extends Model {
  static get tableName() {
    return 'channels';
  }

  static get idColumn() {
    return 'id';
  }
}

module.exports = ChannelsModel;
