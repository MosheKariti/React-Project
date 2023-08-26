import {getUserDetailsByToken} from "../Axios/axios";

export async function HandleAccessToken() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        try {
            let user = getUserDetailsByToken(accessToken)
            return user;
        } catch (error) {
            console.log(error);
        }
    } else {
        return undefined;
    }
}