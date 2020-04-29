var firebaseConfig = {
    apiKey: "AIzaSyAxYjewGKRt0fFec2E2h1N2niQSWbmbGa0",
    authDomain: "kidzdb-0001.firebaseapp.com",
    databaseURL: "https://kidzdb-0001.firebaseio.com",
    projectId: "kidzdb-0001",
    storageBucket: "kidzdb-0001.appspot.com",
    messagingSenderId: "901167894226",
    appId: "1:901167894226:web:03b5084e71bd824bea270b",
    measurementId: "G-52DH773Q44"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();

// signup
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        signupForm.reset();
    });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
        document.querySelector('#status').innerHTML = 'User logout'
    })
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        console.log(cred.user);
        loginForm.reset();
        document.querySelector('#status').innerHTML = auth.currentUser.email
    });

});

if (auth.currentUser !== null) {
    document.querySelector('#status').innerHTML = auth.currentUser.email
} else {
    document.querySelector('#status').innerHTML = 'User logout'
}