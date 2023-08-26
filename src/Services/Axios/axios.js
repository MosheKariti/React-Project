import axios from "axios";
import {useState} from "react";
import jwtDecode from "jwt-decode";

export async function createUser(user) {

    await axios.post('http://localhost:8181/users', user)

}
export async function createCard(card) {
    const accessToken = localStorage.getItem('accessToken');
    await axios.post('http://localhost:8181/cards', card,{
        headers: {
            'x-auth-token': accessToken,
        }
    })
}
export async function updateCard(card,cardId) {
    const accessToken = localStorage.getItem('accessToken');
    await axios.put('http://localhost:8181/cards/' + cardId, card,{
        headers: {
            'x-auth-token': accessToken,
        }
    });
}
export async function getUser(post) {
        const loginResponse = await axios.post(`http://localhost:8181/users/login`, post);
        const accessToken = loginResponse.data;
        const user = await getUserDetailsByToken(accessToken);
        return user;
}
export async function getUserDetailsByToken(accessToken) {
    const decodedToken = jwtDecode(accessToken);
    localStorage.setItem('accessToken',accessToken);
    // Use decoded token to fetch user data
    const userDataResponse = await axios.get(`http://localhost:8181/users/${decodedToken._id}`, {
        headers: {
            'x-auth-token': accessToken,
        }
    });
    return userDataResponse.data;
}
export async function handleCardLiking(cardID) {
    const accessToken = localStorage.getItem('accessToken');
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
export async function deleteCard(cardId) {
    const accessToken = localStorage.getItem('accessToken');
    await axios.delete('http://localhost:8181/cards/' + cardId,{
        headers: {
            'x-auth-token': accessToken,
        }
    });
}