exports.up = function (knex, Promise) {
  return knex.schema.createTable('register', function (table) {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('username').notNullable().unique().defaultTo('');
    table.string('email').notNullable().unique().defaultTo('');
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('register');
};
