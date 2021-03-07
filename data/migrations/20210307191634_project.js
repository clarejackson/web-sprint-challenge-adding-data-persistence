const { Knex } = require("knex");

exports.up = async function(knex) {
  await Knex.schema.createTable('projects', (table) => {
    table.increments("project_id")
    table.text("project_name").notNull()
    table.text("project_description")
    table.integer("project_completed").defaultTo(0)
  })
};

exports.down = async function(knex) {
  await knex.dropTableIfExists('projects')
};
