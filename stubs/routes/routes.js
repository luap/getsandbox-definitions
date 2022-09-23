/*
 * POST /
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.post = function(req, res) {
	res.status(200);
	
	state.preferences = state.preferences || [];
	
	let preference = req.body;
	
	preference.id = "67917474-4036-fbc9-0f17-36a2119f0ec9";
	preference.lastModifiedBy = preference.modifiedBy;
	preference.lastModifiedDate = moment().format("YYYY-MM-DDTHH:mm:ss[Z]");
    
    // persist user by adding to the state object
    state.preferences.push(preference);

	// set response body and send
	res.json(preference);
};