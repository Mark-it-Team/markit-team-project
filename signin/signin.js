import { redirectIfLoggedIn, signInUser } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');


redirectIfLoggedIn();

signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = await signInUser(signInEmail.value, signInPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});
