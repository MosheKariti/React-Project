import React, {useEffect, useState} from 'react';
import {CardsRender} from "../Cards/CardsRender";
import {handleCardLiking, getCards} from "../../Services/Axios/axios";

export function FavCardsPage({loggedInUser}) {
    const [cards,setCards] = useState(null);
    const [isLoading,setLoading] = useState(true);

    async function handleRemoveFromFavorites(event) {
        const cardId = event.currentTarget.getAttribute('card-id');
        try {
            await handleCardLiking(cardId);
            const updatedCards = cards.filter(card => card._id !== cardId);
            setCards(updatedCards);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCards().then(response => {
            const favoriteCards = response.filter(card => card.likes.includes(loggedInUser._id));
            setCards(favoriteCards);
            setLoading(false);
        }).catch (error => console.log(error));
    },[]);

    return (
        <>
            {!isLoading &&
            <>
                <div className={'mt-5'}>
                   {cards.length === 0 && <h1>No Favorite Cards yet</h1>}
                </div>
                <div>
                    <div className={"container-fluid content p-3 bg-opacity-75 d-flex flex-wrap"}>
                    {cards.map(card => (
                        <div style={{flex: '0 0 10%', padding: '10px'}}>
                            <CardsRender
                                cardAlt={card.image.alt}
                                cardID={card._id}
                                isEditMode={false}
                                cardDesc={card.description}
                                cardAddress={card.address}
                                cardPhone={card.phone}
                                cardTitle={card.title}
                                cardImageUrl={card.image.url}
                                isFavorite={true}
                                favFunction={handleRemoveFromFavorites}
                            ></CardsRender>
                        </div>
                        ))}
                    </div>
                </div>
            </>
            }

        </>
    )
}