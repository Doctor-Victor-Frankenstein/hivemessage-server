exports.up = function(knex) {
  return knex.schema.createTable('globals',function(table){
    table.string('name').primary()
    table.string('value').nullable()
    table.integer('created_at')
    table.integer('updated_at')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('globals')
};
