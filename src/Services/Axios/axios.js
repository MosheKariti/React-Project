import axios from "axios";
import {useState} from "react";
import jwtDecode from "jwt-decode";

export async function createUser(user) {

    await axios.post('http://localhost:8181/users', user)

}
// export async function userLogin(userInput, setToken, setUser) {
//     const post = { email: userInput.email, password: userInput.password }
//     try {
//         const res = await axios.post('http://localhost:8181/users/login', post)
//         setToken(res.data);
//         await getUser(res.data,setUser);
//
//     } catch (e) {
//         alert(e)
//     }
// }
export async function getUser(post) {
        const loginResponse = await axios.post(`http://localhost:8181/users/login`, post);

        const accessToken = loginResponse.data;
        const decodedToken = jwtDecode(accessToken);
        localStorage.setItem('accessToken',accessToken);
        // Use decoded token to fetch user data
        const userDataResponse = await axios.get(`http://localhost:8181/users/${decodedToken._id}`, {
            headers: {
                'x-auth-token': accessToken,
            }
        });
        return userDataResponse;
}
export async function handleCardLiking(cardID) {
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    const favoriteResponse = await axios.patch(`http://localhost:8181/cards/${cardID}`,{},{
        headers: {
            'x-auth-token': accessToken,
        }
    });
    return favoriteResponse;
}
export async function getCards() {
   const cards = await axios.get('http://localhost:8181/cards');
   return cards.data;
}