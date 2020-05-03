const inputs = document.querySelectorAll(".input");

function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


// Validate password
var password = document.getElementById("signup-password"),
	confirm_password = document.getElementById("confirm-password");

function lenPassword() {
	if (password.value.length < 6) {
		password.setCustomValidity("Password should be at least 6 characters");
	} else {
		password.setCustomValidity('');
	}
}

password.onchange = lenPassword;
password.onkeyup = lenPassword;

function validatePassword() {
	if (password.value != confirm_password.value) {
		confirm_password.setCustomValidity("Passwords Don't Match");
	} else {
		confirm_password.setCustomValidity('');
	}
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;