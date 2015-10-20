// Initialize Parse app
Parse.initialize("W9uSW9Sdf2kFfYf8NdbIfcxGLTbwdn4IErQM7Gt2", "QTQVTBGt1SVPCrSlCG3oX2knwjYJoHUNPPWz7OaZ")

// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend("Music");

// Create a new instance of your Music class 
var sweetTune = new Music();

// Set a property 'band' equal to a band name
sweetTune.set('band','Muse');

// Set a property 'website' equal to the band's website
sweetTune.set('website','Muse.com');
    
// Set a property 'song' equal to a song
sweetTune.set('song','best song');

// Save your instance of your song -- and go see it on parse.com!
sweetTune.save();

// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	var newTune = new Music();

	// For each input element, set a property of your new instance equal to the input's value
	var band = $('#band').val()
	newTune.set('band', band)
	var website = $('#website').val()
	newTune.set('website', website)
	var song = $('#song').val()
	newTune.set('song', song)
	// After setting each property, save your new instance back to your database
	newTune.save()

	//clear it out
	$('#band').val(' ')
	$('#website').val(' ')
	$('#song').val(' '))
	
	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


