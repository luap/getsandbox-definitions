

/*
 * POST /search
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postSearch = function(req, res) {
	res.status(200);
	
	state.preferences = state.preferences || [];
	
	let preference = req.body;
	
	preference.id = faker.datatype.uuid();
	preference.lastModifiedBy = faker.name.findName();
	preference.lastModifiedBy = moment().format("YYYY-MM-DDTHH:mm:ss[Z]");
    
    // persist user by adding to the state object
    state.preferences.push(preference);

	// set response body and send
	res.json(preference);
};