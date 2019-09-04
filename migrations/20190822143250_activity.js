exports.up = function(knex, Promise) {
    return knex.schema.createTable('activity', table => {
        table.increments('id')
        table.string('image')
        table.string('title')
        table.string('activity')
        table.integer('price')
        table.string('rate')
        table.integer('star')
        table.integer('location_id')
        table.timestamps()
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('activity')
};
