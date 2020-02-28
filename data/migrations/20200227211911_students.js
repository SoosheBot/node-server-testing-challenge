exports.up = function(knex) {
  return knex.schema.createTable("students", function(tbl) {
    tbl.increments();
    tbl
      .string("name", 255)
      .notNullable()
      .unique()
      .index();
    tbl
      .integer("cohort_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("cohorts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("students");
};
