// import React from 'react';
// import axios from 'axios';
//
// export async function getUsers() {
//     try {
//         const response = await axios.get('http://localhost:8181/users');
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }
// export async function getCards() {
//     try {
//         const response = await axios.get('http://localhost:8181/cards').then(function (response) {return response.data});
//         return response;
//     } catch (error) {
//         console.error(error);
//     }
// }
//
// export async function login() {
//     axios.post('http://localhost:8181/users/login', {
//         email: 'regular@gmail.com',
//         password: 'Aa1234!'
//     })
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }
//
