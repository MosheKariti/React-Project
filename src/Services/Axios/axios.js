import axios from "axios";
import {useState} from "react";
import jwtDecode from "jwt-decode";

export async function createUser(user) {
    try {
        const res = await axios.post('http://localhost:8181/users', user)
        console.log(res.data)
    } catch (e) {
        console.log(e)
    }
}
export async function userLogin(userInput, setToken, setUser) {
    const post = { email: userInput.email, password: userInput.password }
    try {
        const res = await axios.post('http://localhost:8181/users/login', post)
        setToken(res.data);
        await getUser(res.data,setUser);
    } catch (e) {
        alert(e)
    }
}
export async function getUser(token,setUser) {
    const config = {
        headers: { 'x-auth-token':  token }
    };
    let decoded = jwtDecode(token);
    const url = 'http://localhost:8181/users/' + decoded._id;
    try {
        const res = await axios.get(url,config);
        setUser(res.data);
    } catch (e) {
        console.log(e)
    }
}