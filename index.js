/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-concise',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/concise/dist/css/concise.css');
    app.import(app.bowerDirectory + '/concise/dist/js/concise.js');
  }
};
