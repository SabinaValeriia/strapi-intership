'use strict';

/**
 * tasks service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tasks.tasks');
