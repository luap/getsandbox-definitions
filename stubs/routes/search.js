

/*
 * POST /search
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postSearch = function(req, res) {
	res.status(200);

	// set response body and send
	res.json({
  "id": "67917474-4036-fbc9-0f17-36a2119f0ec9",
  "email": "200@tmw.test",
  "preferences": [
    "Post"
  ],
  "source": "Salesforce",
  "lastModifiedBy": "exercitation Lorem",
  "lastModifiedDate": "1990-06-14T03:10:40.678Z"
});
};