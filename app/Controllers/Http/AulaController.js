"use strict";

const Aulas = use("App/models/Aula");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with aulas
 */
class AulaController {
  /**
   * Show a list of all aulas.
   * GET aulas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const aulas = await Aulas.all();
    return aulas;
  }

  /**
   * Render a form to be used for creating a new aula.
   * GET aulas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async store({ request, response }) {
    const data = request.only([
      "curso_id",
      "video",
      "pergunta",
      "resposta1",
      "resposta2",
      "resposta3",
      "respostaCerta"
    ]);
    const aula = await Aulas.create(data);
    return aula;
  }

  /**
   * Display a single aula.
   * GET aulas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    const aula = await Aulas.findOrFail(params.id);
    return aula;
  }

  /**
   * Render a form to update an existing aula.
   * GET aulas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async update({ params, request, response }) {}

  /**
   * Delete a aula with id.
   * DELETE aulas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, auth }) {
    const aula = await Aulas.findOrFail(params.id);
    await aula.delete();
  }
}

module.exports = AulaController;
