/*
//Handle non-credit-card form fields

const form = document.getElementById('payment-form');
const	postalCodeField = document.getElementById('postal_code');
const countryField = document.getElementById('country');
const stateField = document.getElementById('state');

//make available form fields reflect country input
country.addEventListener('input', function (event) {
	console.log(country.value);
	// Only show the state input for the United States.
	if (country.value == 'US') {
		stateField.style.display = 'block';
		stateField.required = true;
	} else {
		stateField.style.display = 'none';
		stateField.required = false;
		//reset state field on non-US country selected
		stateField.selectedIndex = "0";
		stateField.classList.add('placeheld');
	}
	// Update the ZIP label to make it more relevant for each country.
	postalCodeField.placeholder =
		country.value === 'US' ? 'zipcode' : country.value === 'GB' ? 'postcode' : 'postal code';
});

//grey out state field placeholder on page load
stateField.classList.add('placeheld');
stateField.addEventListener('input', (e) => {
  e.currentTarget.classList.remove('placeheld');
});

//grey out country field placeholder on page load
countryField.classList.add('placeheld');
countryField.addEventListener('input', (e) => {
  e.currentTarget.classList.remove('placeheld');
});
*/


//sidebar toggle
const sidebar = document.getElementById('sidebar');
const spacer = document.getElementById('spacer');

function toggleSidebar() {
	if (spacer.style.width == '0px') {
		spacer.style.width = sidebar.offsetWidth + 'px';
	} else {
		spacer.style.width = '0px';
	}

	/*if (sidebarTracker == false) {
	//sidebar.style.left = (content.offsetWidth - sidebar.offsetWidth) + 'px';
		content.style.paddingRight = sidebar.offsetWidth + 'px';
	} else {
		//sidebar.style.left = '100%';
		content.style.paddingRight = '0';
	}*/
}
