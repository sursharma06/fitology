exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipes', function (table) {
    table.increments();
    table.text('name').notNullable().defaultTo('');
    table.text('ingredients').notNullable().defaultTo('');
    table.text('directions').notNullable().defaultTo('');
    table.integer('register_id')
      .references('id')
      .inTable('register')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('recipes');
};
