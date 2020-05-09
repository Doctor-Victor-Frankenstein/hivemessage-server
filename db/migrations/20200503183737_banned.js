exports.up = function(knex) {
  return knex.schema.createTable('banned',function(table){
    table.string('id').primary()
    table.string('channel').references('id').inTable('channels').onUpdate('CASCADE').onDelete('CASCADE')
    table.string('username').notNullable()
    table.integer('created_at')
    table.integer('updated_at')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('banned')
};
  