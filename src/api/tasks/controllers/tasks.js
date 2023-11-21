'use strict';

/**
 * tasks controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tasks.tasks');
