function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;

	// Print the user's full name into the console
	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);
	console.log(age);

	if (age >= 18) {
		console.log('User is an adult.');
	} else if (age >= 13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child.');
	}

	/*
		If the user's first name is 'General' and their last name is NOT 'Assembly', then greet the general!
		(Hint: Use the console.log)
	*/

	if (firstName.toLowerCase() === "General" && lastName.toLowerCase() !== "Assembly") {
		console.log('Welcome General.');
	} else {
		console.log('Goodbye.');
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();
	if (faveColour === 'red' ||
		faveColour === 'blue' ||
		faveColour === 'green' ||
		faveColour === 'yellow') {
		//Change the heading to this colour
	$('h1').css('color', faveColour);
	}

}

// when the page has loaded
$(function () {

	//hide all the content
	$('h3').next().hide();

	// When the user clicks the image, ask questions
	$('img').on('click', askQuestions);

	// when the user clicks a heading
	$('h3').on('click', function () {

		// Toggle the next element
		$(this).next().slideToggle();

	});

});

