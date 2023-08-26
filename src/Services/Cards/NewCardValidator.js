import {validEmail, validPhone} from "../../Components/Pages/Regex";
import {useLoaderData} from "react-router";
export function NewCardValidator(
    event,setIsTitleError,setIsSubtitleError,setIsDescriptionError,setIsPhoneError,setIsEmailError,setIsCountryError,setIsCityError,setIsStreetError,setIsHouseNumberError,cardToEdit
) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const card = {
        user_id: cardToEdit.user_id,
        title: data.get('title'),
        subtitle: data.get('subtitle'),
        description: data.get('description'),
        phone: data.get("phone"),
        email: data.get("email"),
        web: data.get("web"),
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
        }
    }

    const isValidEmail = validateEmail();
    const isValidPhone = validatePhone();
    if (isValidEmail && isValidPhone) {
        return {card: card,valid: true};
    }
    function validateEmail() {
        if (!validEmail.test(card.email)) {
            setIsEmailError(true);
            return false;
        } else {
            setIsEmailError(false);
            return true;
        }
    }
    function validatePhone() {
        if (!validPhone.test(card.phone)) {
            setIsPhoneError(true);
            return false;
        } else {
            setIsPhoneError(false);
            return true;
        }
    }
}