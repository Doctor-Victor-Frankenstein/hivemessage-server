const moment = require('moment')

exports.seed = function(knex) {
  return knex('globals').del()
    .then(function () {
      
      return knex('globals').insert([
        {
          name: 'head_block',
          value: "0",
          created_at: moment.utc().unix(),
          updated_at: moment.utc().unix()
        }
      ]);

    });
};
