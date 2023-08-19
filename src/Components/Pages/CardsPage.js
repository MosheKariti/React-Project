import React, {useEffect, useState} from 'react';
import {CardsRender} from "../Cards/CardsRender";
import {initialCards} from "../../Data/defaultCards.js";
import {getCards} from "../dbServiceTst";
import axios from "axios";

export function CardsPage() {
    const [cards,setUCards] = useState(null);
    const [isLoading,setLoading] = useState(true);

    useEffect(() => {
            axios.get('http://localhost:8181/cards').then(response => {
                setUCards(response.data);
                setLoading(false);
            }).catch (error => console.log(error));
    },[]);
    if (isLoading) {
        return <div className="App"></div>;
    }

    return (
        <>
            <div>
                <div style={{display:'flex', justifyContent:'center'}} className={"container-fluid content p-3 bg-opacity-75"}>
                    <CardsRender cardsArray={cards} isEditMode={false}/>
                </div>
            </div>
        </>
    )
}