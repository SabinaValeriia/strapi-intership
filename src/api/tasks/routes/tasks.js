'use strict';

/**
 * tasks router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tasks.tasks');
