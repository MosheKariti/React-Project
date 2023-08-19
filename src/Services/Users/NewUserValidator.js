import {validEmail, validPassword, validPhone} from "../../Components/Pages/Regex";
export function NewUserValidator(event, isBusiness, setIsNameError, setIsEmailError, setIsPhoneError, setIsPasswordError) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
        name: {
            first: data.get('firstName'),
            middle: data.get('middleName'),
            last: data.get('lastName')
        },
        phone: data.get("phone"),
        email: data.get("email"),
        password: data.get("password"),
        image: {
            url: data.get("image"),
            alt: "business card image"
        },
        address: {
            state: data.get("state"),
            country: data.get("country"),
            city: data.get("city"),
            street: data.get("street"),
            houseNumber: data.get("houseNumber"),
            zip: data.get("zip")
        },
        isAdmin: false,
        isBusiness: isBusiness
    }
    if (validatePassword() &&  validateEmail() && validatePhone() &&  validateFirstName()) {
        return {user: user,valid: true};
    }
    function validatePassword() {
        if (!validPassword.test(user.password)) {
            setIsPasswordError(true);
            return false;
        } else {
            return true;
        }
    }
    function validateEmail() {
        if (!validEmail.test(user.email)) {
            setIsEmailError(true);
            return false;
        } else {
            return true;
        }
    }
    function validatePhone() {
        if (!validPhone.test(user.phone)) {
            setIsPhoneError(true);
            return false;
        } else {
            return true;
        }
    }
    function validateFirstName() {
        if(user.name.first.length < 2) {
            setIsNameError(true);
            return false;
        } else {
            return true;
        }
    }
}
