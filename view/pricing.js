var config = require("../config");

module['exports'] = function view (opts, callback) {
  var $ = this.$, req = opts.req;
  // if paid account
  // $('.freeAccount').remove();
  $ = req.white($);
  var out = $.html();
  out = out.replace('{{stripePK}}', config.stripe.publicKey);
  callback(null, out);
};