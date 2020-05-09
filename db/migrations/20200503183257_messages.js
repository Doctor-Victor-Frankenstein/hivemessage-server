exports.up = function(knex) {
  return knex.schema.createTable('messages',function(table){
    table.string('id').primary()
    table.string('username').notNullable()
    table.string('room').references('id').inTable('rooms').onUpdate('CASCADE').onDelete('CASCADE')
    table.string('last_update')
    table.string('meta_data')
    table.integer('created_at')
    table.integer('updated_at')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('messages')
};
