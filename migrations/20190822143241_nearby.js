exports.up = function(knex, Promise) {
    return knex.schema.createTable('nearby', table => {
        table.increments('id')
        table.string('image')
        table.string('house_type')
        table.string('location')
        table.string('title')
        table.integer('price')
        table.string('rate')
        table.integer('star')
        table.integer('location_id')
        table.timestamps()
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('nearby')
};

