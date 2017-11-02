exports.up = function (knex, Promise) {
  return knex.schema.createTable('login', function (table) {
    table.increments('id');
    table.string('username').notNullable().unique();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('login');
};
