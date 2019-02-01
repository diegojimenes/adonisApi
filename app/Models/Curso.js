"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Curso extends Model {
  aulas() {
    return this.hasMany("App/models/Aula");
  }
}

module.exports = Curso;
