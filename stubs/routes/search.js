

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
    var email = req.params.email;

    // log it to the console
    console.log("Getting email " + email + " details");

    // use lodash to find the user in the array
    var preference = _.find(state.preferences, { "email": email});
    
    return res.json(preference);
};