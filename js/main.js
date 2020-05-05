// analytics
// an.logEvent('notification_received');

// listen for auth status changes
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("User logged in: ", user);
        document.querySelector("#container-main").style.display = "block"
        document.querySelector("#welcome").innerHTML = "Welcome " + user.email;
    } else {
        window.location.replace("/index.html");
    }
});

// logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut();
});