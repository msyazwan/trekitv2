// analytics
// an.logEvent('notification_received');

// listen for auth status changes
auth.onAuthStateChanged((user) => {
    if (user) {
        window.location.replace("/main.html");
    } else {
        console.log("No logged in user.");
        document.querySelector("#container-index").style.display = "block"
    }
});

// login
const loginForm = document.querySelector("#signInForm");
loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = loginForm["email"].value;
    const password = loginForm["password"].value;

    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        loginForm.reset();
        console.log(cred)
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);
    });

});