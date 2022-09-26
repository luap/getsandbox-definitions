var pako = require("../pako.js")

/*
 * POST /search
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postSearch = function(req, res) {
    var body = pako.inflate(req.body);
    
	res.status(200);
	
    state.preferences = state.preferences || [];

    // route param {username} is available on req.params
    var email = body.email;
    
    if (email.includes('400')) {
        res.status(400);
    } else if (email.includes('500')) {
        res.status(500);
    }

    // log it to the console
    console.log("Getting email " + email + " details");

    // use lodash to find the user in the array
    var preference = _.findLast(state.preferences, { "email": email});
    
    if (preference === undefined) {
        res.status(204);
        
        return res;
    }
    
    return res.json(preference);
};