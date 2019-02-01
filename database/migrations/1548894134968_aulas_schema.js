"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AulasSchema extends Schema {
  up() {
    this.create("aulas", table => {
      table.increments();
      table
        .integer("curso_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("cursos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      table.string("video").notNullable();
      table.string("pergunta").notNullable();
      table.string("resposta1");
      table.string("resposta2");
      table.string("resposta3");
      table.string("respostaCerta");

      table.timestamps();
    });
  }

  down() {
    this.drop("aulas");
  }
}

module.exports = AulasSchema;
