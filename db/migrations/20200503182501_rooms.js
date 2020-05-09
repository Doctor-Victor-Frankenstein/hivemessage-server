exports.up = function(knex) {
  return knex.schema.createTable('rooms',function(table){
    table.string('id').primary()
    table.string('channel').references('id').inTable('channels').onUpdate('CASCADE').onDelete('CASCADE')
    table.string('last_update')
    table.string('meta_data')
    table.boolean('locked').defaultTo(false)
    table.integer('created_at')
    table.integer('updated_at')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('rooms')
};
