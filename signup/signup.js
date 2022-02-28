import { redirectIfLoggedIn, signupUser } from '../fetch-utils.js';



signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = await signupUser(signUpEmail.value, signUpPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});
