
exports.up = function(knex) {
  return knex.schema.createTable('books', tbl => {
      tbl.increments()

      tbl.string('title', 244).unique()
      tbl.string('author', 244)
      tbl.string('subject', 244)
      tbl.text('description', 380)
      tbl.integer('avg_rating')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books')
};
