exports.up = function (knex, Promise) {
  return knex.schema.createTable('arms', function (table) {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.text('cover_url').notNullable().defaultTo('');
    table.text('video_url').notNullable().defaultTo('');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('arms');
};
