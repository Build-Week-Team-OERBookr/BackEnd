
exports.up = function(knex) {
  return knex.schema.createTable('books', tbl => {
      tbl.increments()

      tbl.string('title', 244).unique().notNullable();
      tbl.string('author', 244);
      tbl.string('publisher', 400);
      tbl.string('license', 400).notNullable();
      tbl.text('description', 1024);
      tbl.string('image');
      tbl.integer('avg_rating');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books')
};
