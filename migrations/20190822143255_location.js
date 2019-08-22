exports.up = function(knex, Promise) {
    return knex.schema.createTable('location', table => {
        table.increments('id')
        table.string('lat')
        table.string('lng')
        table.timestamps()
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('location')
};
