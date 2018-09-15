exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('firstName');
      table.string('lastName');
      table.string('email');
      table.string('phoneNumber');
      table.string('contactName');
      table.string('contactPhone');
      table.boolean('isElder');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('users')]);
};
