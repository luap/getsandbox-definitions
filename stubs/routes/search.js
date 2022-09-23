

/*
 * POST /search
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postSearch = function(req, res) {
	res.status(200);
	
	state.preferences = state.preferences || [];
	
	state.preferences.id = faker.datatype.uuid();
	state.preferences.lastModifiedBy = faker.name.findName();
	state.preferences.lastModifiedBy = moment().format("YYYY-MM-DDTHH:mm:ss[Z]");
    
    // persist user by adding to the state object
    state.preferences.push(req.body);

	// set response body and send
	res.json({
  "email": "200@tmw.test",
  "preferences": [
    "Post"
  ],
  "source": "Salesforce",
  "lastModifiedDate": "1990-06-14T03:10:40.678Z"
});
};