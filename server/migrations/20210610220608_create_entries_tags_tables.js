exports.up = function (knex) {
    return knex.schema
        .createTable('tags', (table) => {
        table.increments('id').primary();
        table.string('tag').notNullable();
        })
        .createTable('entries', function (table) {
        table.increments('id').primary();
        table.integer('user_id').defaultTo(1);
        table.timestamp('timestamp').defaultTo(knex.fn.now());
        table.string('title', 1024).notNullable();
        table.string('entry', 2400).notNullable();
        })
        .createTable('entries_tags', (table) => {
        table.increments('id').primary();
        table.integer('entry_id').unsigned().references('entries.id')
        table.integer('tag_id').unsigned().references('tags.id')
        });
};

exports.down = function (knex) {
return knex.schema.dropTable('entries_tags').dropTable('tags')
    .dropTable('entries');
};