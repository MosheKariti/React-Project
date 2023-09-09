export function Deprecated_RegistrationHandler(event, type) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
        type: type,
        name: data.get("name"),
        email: data.get("email"),
        password: data.get("password")
    }
    if (type === 'business') {
        user.myCards = [];
    }
    let isValidName = false;
    let isValidEmail = false;
    let isValidPassword = false;
    if (user.email.includes("@") && user.email.includes(".") && user.email.length > 8 && !user.email.includes(' ') && user.email.length > 0) {
        isValidEmail = true;
    }
    if (user.password.length >= 6) {
        isValidName = true;
    }
    if (user.name.length >= 6 && user.name.includes(' ')) {
        isValidPassword = true;
    }
    if (isValidEmail && isValidName && isValidPassword) {
        return saveToLocalStorage(user);
    }
}
function saveToLocalStorage(user) {
    let users = JSON.parse(localStorage.getItem('users'));
    if (users === null) {
        localStorage.setItem('users', JSON.stringify([user]));
        } else {
            localStorage.setItem('users',JSON.stringify([...users,user]));
        }
    return true;
}