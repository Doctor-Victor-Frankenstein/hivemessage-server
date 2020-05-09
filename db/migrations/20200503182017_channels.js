exports.up = function(knex) {
  return knex.schema.createTable('channels',function(table){
    table.string('id').primary()
    table.string('block_num').notNullable()
    table.string('last_update')
    table.string('username').notNullable()
    table.string('meta_data')
    table.integer('created_at')
    table.integer('updated_at')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('channels')
};
