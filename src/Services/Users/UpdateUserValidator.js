import {validEmail, validPhone} from "../../Components/Pages/Regex";
export function UpdateUserValidator(loggedInUser,event,setIsNameError,setIsEmailError,setIsPhoneError,setIsCountryError,setIsCityError,setIsStreetError,setIsHouseNumberError,setIsZipError) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = loggedInUser;
    user.name.first = data.get('firstName');
    user.name.middle = data.get('middleName');
    user.name.last = data.get('lastName');
    user.phone = data.get("phone");
    user.email = data.get("email");
    user.image.url = data.get("image");
    user.address.state = data.get("state");
    user.address.country = data.get("country");
    user.address.city = data.get("city");
    user.address.street = data.get("street");
    user.address.houseNumber = data.get("houseNumber");
    user.address.zip = data.get("zip");

    const isValidEmail = validateEmail();
    const isValidPhone = validatePhone();
    const isValidFirstName = validateFirstName();
    if (isValidEmail && isValidPhone &&  isValidFirstName) {
        return {user: user,valid: true};
    }
    function validateEmail() {
        if (!validEmail.test(user.email)) {
            setIsEmailError(true);
            return false;
        } else {
            setIsEmailError(false);
            return true;
        }
    }
    function validatePhone() {
        if (!validPhone.test(user.phone)) {
            setIsPhoneError(true);
            return false;
        } else {
            setIsPhoneError(false);
            return true;
        }
    }
    function validateFirstName() {
        if(user.name.first.length < 2) {
            setIsNameError(true);
            return false;
        } else {
            setIsNameError(false);
            return true;
        }
    }
}
