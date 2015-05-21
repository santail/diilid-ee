'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://' + process.env.IP + ':27017/deals_development'
  },

  seedDB: true
};
