'use strict';

/**
 * tags service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tags.tags');
