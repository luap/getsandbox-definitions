
/*
 * MarketingPreferences.Api
 *
 * 
 */


var routes = require("./routes/routes.js")
var search = require("./routes/search.js")

var pako = require("./pako.js")


/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.define("/", "POST", routes.post);
Sandbox.define("/search", "POST", search.postSearch);