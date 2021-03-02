
exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
        table.increments();
        table.string("username", 15)
            .notNullable()
            .unique();
        table.string("first_name", 30)
            .notNullable();
        table.string("last_name", 40)
            .notNullable();
        table.string("email", 128)
            .notNullable()
            .unique();
        table.string("password")
            .notNullable();
        table.string("role", 10)
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};