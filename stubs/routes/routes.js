var pako = require("../pako.js")
var zlib = require("../zlib.js")

/*
 * POST /
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.post = function(req, res) {
    
    
    //var enc = new TextEncoder(); // always utf-8

    //var body = pako.inflate(new Uint8Array(req.body), {raw:true});
    
    //console.log("Body is " + JSON.stringify(req.body))
    
    //var body = res.json(req.body)
        
	res.status(200);
	
	state.preferences = state.preferences || [];
	
	let preference = req.body;

    if (preference.email.includes('400-update')) {
        res.status(400);
    } else if (preference.email.includes('500-update')) {
        res.status(500);
    } else if (preference.email.includes('401-update')) {
        res.status(401);
    } else if (preference.email.includes('403-update')) {
        res.status(403);
    } else if (preference.email.includes('429-update')) {
        res.status(429);
    } else if (preference.email.includes('502-update')) {
        res.status(502);
    } else if (preference.email.includes('503-update')) {
        res.status(503);
    } else if (preference.email.includes('504-update')) {
        res.status(504);
    }

	preference.id = "67917474-4036-fbc9-0f17-36a2119f0ec9";
	preference.lastModifiedBy = preference.modifiedBy;
	preference.lastModifiedDate = moment().format("YYYY-MM-DDTHH:mm:ss[Z]");
	
	//moment().format("YYYY-MM-DDTHH:mm:ss[Z]");
	//"lastModifiedDate": "2022-09-23T16:20:38.892Z"
    
    // persist user by adding to the state object
    state.preferences.push(preference);

	// set response body and send
	res.json(preference);
};