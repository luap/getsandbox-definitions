

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
	
	if (preference.email.includes('400')) {
        res.status(400);
    } else if (preference.email.includes('500')) {
        res.status(500);
    }

	preference.id = _.datatype.uuid(); //"67917474-4036-fbc9-0f17-36a2119f0ec9";
	preference.lastModifiedBy = preference.modifiedBy;
	preference.lastModifiedDate = moment().format("YYYY-MM-DDTHH:mm:ss[Z]");
	
	//moment().format("YYYY-MM-DDTHH:mm:ss[Z]");
	//"lastModifiedDate": "2022-09-23T16:20:38.892Z"
    
    // persist user by adding to the state object
    state.preferences.push(preference);

	// set response body and send
	res.json(preference);
};