/*Create a Node.js application that does the following:
- Takes in one parameter from the command line, the 
name of a country. Note: command line arguments can 
be read from the global array `process.argv`
- Reads and parses the `countries.json` file. Note: 
you must use readFile and not readFileSync.
- Outputs information about that specific country. 
Must be in the following format:
Country: <country name>
Top Level Domain: <tld>*/

//require the module we just made
var filereader = require('../resources/json-file-reader.js')
//storing the argument from the command line in a variable
var country = process.argv[2];

//calling the reading-function from the filereader module and setting the first
//argument to be the json-file. The second argument defines the callback-function
//parameter and is going to output the name and top level domain from a country.
filereader.reading('../resources/countries.json', function(obj) {

	//loop through the array of objects in the JSON-file
	for(var i = 0; i< obj.length;i++){
		//and if the name of one of the objects equals the value of country (argument from the commandline)
		if(obj[i].name == country){
			//then console.log the name and the top level domain. 
			console.log("Country: " + obj[i].name + '\n' + "Top Level Domain: " + obj[i].topLevelDomain);
		}		
	}
});

// NOTES TO SELF:
// - COMMAND LINE ARGUMENTS ARE CASE SENSITIVE
// - TO ADD A LINE BREAK IN YOUR CONSOLE.LOG, USE '\n'
// - TO END A LOOP, USE RETURN
// - PARAMETERS CAN BE WHATEVER YOU WANT THEM TO BE, JUST REMEMBER TO USE THE RIGHT SYNTAX AND JAVASCRIPT WILL KNOW WHAT TO DO WITH THEM