import React, {useEffect, useState} from 'react';
import {CardsRender} from "../Cards/CardsRender";
import {toast, ToastContainer} from "react-toastify";
import {getCards, handleCardLiking} from "../../Services/Axios/axios";

export function CardsPage({loggedInUser}) {
    function promptToastOfNotSupportedFeature() {
        toast.info('This feature will be available in the next version :)');
    }
    async function handleCardLike(event) {
        if (loggedInUser) {
            const cardId = event.currentTarget.getAttribute('card-id');
            try {
                await handleCardLiking(cardId);
                const updateCards = cards.map(card =>
                card._id === cardId ? {...card, isFavorite: !card.isFavorite} : card);
                setCards(updateCards);
            } catch (error) {
                console.log(error)
            }
        } else {
            promptToastOfNotSupportedFeature();
        }
    }
    const [cards,setCards] = useState(null);
    const [isLoading,setLoading] = useState(true);

    useEffect(() => {
        getCards().then(response => {
        if(loggedInUser) {
                    const updateCards = response.map(card =>
                    card.likes.includes(loggedInUser._id) ? {...card, isFavorite: !card.isFavorite} : card
                    );
                    setCards(updateCards);
                } else {
                    setCards(response);
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
                <div className={"container-fluid content p-3 bg-opacity-75 d-flex flex-wrap"}>
                    {cards.map((card,index) => (
                        <div style={{flex: '0 0 10%', padding: '10px'}}>
                        <CardsRender
                                key={index}
                                cardAlt={card.image.alt}
                                cardID={card._id}
                                cardDesc={card.description}
                                cardAddress={card.address}
                                cardPhone={card.phone}
                                cardTitle={card.title}
                                cardImageUrl={card.image.url}
                                isFavorite={card.isFavorite}
                                favFunction={handleCardLike}
                                phoneFunction={promptToastOfNotSupportedFeature}
                            ></CardsRender>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}