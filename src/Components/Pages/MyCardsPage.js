import React, { useState } from "react";
import { MyCardButtons } from "../Cards/MyCardButtons";
import { CreateCard } from "../Cards/CreateCard";
import { CardsRender } from "../Cards/CardsRender";
import {GetCardsByUser} from "../../Services/GetCardsByUser";

export function MyCardsPage({loggedInUser}) {
    const [pageState,setPageState] = useState('View');
    const cards = GetCardsByUser(loggedInUser);
    return (
        <>
            <h2 className={"text-center"}>MY CARDS</h2>
            <div style={{position:'absolute', width:'200px',left:'0'}}>
                <MyCardButtons setPageState={setPageState}></MyCardButtons>
            </div>
            <div style={{marginTop:'60px', justifyContent:'center', alignItems:'center',alignContent:'center'}}>
                <div>
                    {pageState === 'Create Card' && <CreateCard/>}
                </div>
                <div style={{width:'80%',marginBottom:'150px'}}>
                    {pageState === 'View' &&
                        <CardsRender cardsArray={cards} isEditMode={true}/>}
                    }
                </div>
            </div>

        </>
    )
}

