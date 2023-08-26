import {getUserDetailsByToken} from "../Axios/axios";

export async function HandleUserDetails() {
    let user;
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        user = await getUserDetailsByToken(accessToken)
    }
    return user;
}