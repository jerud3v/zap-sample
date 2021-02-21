const newRegistrationTrigger = require('./triggers/zap_integration_sample.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  triggers: {
    [newRegistrationTrigger.key]: newRegistrationTrigger,
  },
};
