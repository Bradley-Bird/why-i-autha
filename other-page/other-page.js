import { checkAuth, logout } from '../fetch-utils.js';
const logoutBtn = document.getElementById('logout');
// use checkAuth function to redirect is user not authenticated
checkAuth();
// add event listener to the logout button and call logout
logoutBtn.addEventListener('click', async () => {
    await logout();
});
