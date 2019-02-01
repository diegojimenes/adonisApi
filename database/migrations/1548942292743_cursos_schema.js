"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CursosSchema extends Schema {
  up() {
    this.create("cursos", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      table.string("titulo");
      table.string("categoria");
      table.string("instrutor");
      table.string("assunto");

      table.timestamps();
    });
  }

  down() {
    this.drop("cursos");
  }
}

module.exports = CursosSchema;
