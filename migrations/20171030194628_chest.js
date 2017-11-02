exports.up = function (knex, Promise) {
  return knex.schema.createTable('chest', function (table) {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.text('cover_url').notNullable().defaultTo('');
    table.text('video_url').notNullable().defaultTo();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('chest');
};
