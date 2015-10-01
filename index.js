var defaults = require('defaults');

// Simply remove the trailing slash
module.exports = function(options){

  options = defaults(options, {
    slash: false,
    permanent: true,
    clean: false
  });

  return function(req, res, next) {

    // We preserve the route '/' no matter what to avoid nasty redirects
    if (req.url.length == 1)
      return next();

    // The url is in the same format as we expect it
    if (slash == (req.url.substr(-1) === '/')) {
      return next();
    }

    // Get the wanted url
    var newUrl = slash ? req.url + '/' : req.url.slice(0, -1);

    if (options.clean) {
      return newUrl;
    }

    return res.redirect(options.permanent ? 301 : 307, newUrl);
  };
};
