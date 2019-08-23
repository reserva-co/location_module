exports.up = function(knex, Promise) {
    return knex.schema.createTable('activity', table => {
        table.increments('id')
        table.string('image')
        table.string('activity')
        table.integer('price')
        table.string('rate')
        table.integer('location_id')
        table.timestamps()
        table.foreign('location_id')
                .references('location.id')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('activity')
};
