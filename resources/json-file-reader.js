/*The module should have a function that takes in a filename 
and a callback function as a parameter. It should then read 
that file, then parse the JSON. Finally, it should call the 
callback function and pass the parsed JSON to it.*/
var fs = require('fs')

//creating a function with 2 parameters: the filename and a callback function
function reading(filename, callback) {

	//creating an empty object where the parsed data is going to be stored
	var obj;
	
	//calling the fs.readFile function with the filename parameter and setting it to
	//utf8 to make sure the data is correctly encoded
	fs.readFile(filename,'utf8', function (err, data) {
		if (err) {
			throw err;
		}

		//setting the value of obj to the parsed JSON-data. 
		obj = JSON.parse(data);

		//function call for the callbackfunction-paramater and passing the parsed data to it
		callback(obj);
	})
}

//export the reading function for app.js to use
module.exports = {
	reading: reading
}