import React, {useEffect, useState} from 'react';
import {CardsRender} from "../Cards/CardsRender";
import {initialCards} from "../../Data/defaultCards.js";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {handleCardLiking} from "../../Services/Axios/axios";

export function CardsPage({loggedInUser}) {
    function promptToastToRegister() {
        toast.warning('Please Login first');
    }
    async function handleCardLike(event) {
        if (loggedInUser) {
            const cardId = event.currentTarget.getAttribute('card-id');
            try {
                await handleCardLiking(cardId) /// should add card ID
                const updateCards = cards.map(card =>
                card._id === cardId ? {...card, isFavorite: !card.isFavorite} : card);
                setCards(updateCards);
            } catch (error) {
                console.log(error)
            }
        } else {
            promptToastToRegister();
        }
    }
    const [cards,setCards] = useState(null);
    const [isLoading,setLoading] = useState(true);

    useEffect(() => {
            axios.get('http://localhost:8181/cards').then(response => {
                if(loggedInUser) {
                    const updateCards = response.data.map(card =>
                    card.likes.includes(loggedInUser._id) ? {...card, isFavorite: !card.isFavorite} : card
                    );
                    setCards(updateCards);
                } else {
                    setCards(response.data);
                }
                setLoading(false);
            }).catch (error => console.log(error));
    },[]);
    if (isLoading) {
        return <div className="App"></div>;
    }
    return (
        <>
            <ToastContainer
                position="top-center"
                text-center
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div>
                <div style={{display:'flex', justifyContent:'center'}} className={"container-fluid content p-3 bg-opacity-75"}>
                    {cards.map(card => (
                        <CardsRender
                            cardAlt={card.image.alt}
                            cardID={card._id}
                            cardDesc={card.description}
                            cardAddress={card.address}
                            cardPhone={card.phone}
                            cardTitle={card.title}
                            cardImageUrl={card.image.url}
                            isFavorite={card.isFavorite}
                            favFunction={handleCardLike}
                            phoneFunction={promptToastToRegister}
                        ></CardsRender>
                    ))}
                </div>
            </div>
        </>
    )
}