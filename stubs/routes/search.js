var pako = require("../pako.js")

/*
 * POST /search
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postSearch = function(req, res) {
	res.status(200);
	
    state.preferences = state.preferences || [];

    // route param {username} is available on req.params
    var email = req.body.email;

    // log it to the console
    console.log("Getting email " + email + " details");

    // use lodash to find the user in the array
    var preference = _.findLast(state.preferences, { "email": email});
    
    if (email.includes('400-search')) {
        res.status(400);
    } else if (email.includes('500-search')) {
        res.status(500);
    } else if (email.includes('401-search')) {
        res.status(401);
    } else if (email.includes('403-search')) {
        res.status(403);
    } else if (email.includes('429-search')) {
        res.status(429);
    } else if (email.includes('502-search')) {
        res.status(502);
    } else if (email.includes('503-search')) {
        res.status(503);
    } else if (email.includes('504-search')) {
        res.status(504);
    } else {
        if (preference === undefined) {
            res.status(204);
            
            return res;
        }
    }
    
    return res.json(preference);
};