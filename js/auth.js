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