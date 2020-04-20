const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.survey.search(ctx.query);
    } else {
      entities = await strapi.services.survey.find(ctx.query);
    }

    entities.map(entity => sanitizeEntity(entity, { model: strapi.models.survey }));
    return entities;
},
};
