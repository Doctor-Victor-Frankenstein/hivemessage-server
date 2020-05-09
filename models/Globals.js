const { Model } = require('objection');
const knex = require('./../db/knex');
const moment = require('moment')

Model.knex(knex)

class GlobalsModel extends Model {
  static get tableName() {
    return 'globals';
  }

  static get idColumn() {
    return 'name';
  }

  $beforeInsert () {
    this.created_at = moment.utc().unix()
    this.updated_at = moment.utc().unix()
  }

  $beforeUpdate () {
    this.updated_at = moment.utc().unix();
  }
}

module.exports = GlobalsModel;
