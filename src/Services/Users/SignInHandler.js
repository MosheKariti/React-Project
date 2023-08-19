export function SignInHandler(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userInput = {
        email: data.get("email"),
        password: data.get("password")
    }
    let loggedInUser;
    let users = JSON.parse(localStorage.getItem('users'));
    users.forEach((user)=> {
        if (user.email === userInput.email && user.password === userInput.password) {
            loggedInUser = user;
        }
    });
    saveLoggedInUserLocalStorage(loggedInUser);
    return loggedInUser;
}
function saveLoggedInUserLocalStorage(loggedInUser) {
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
}
