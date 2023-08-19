import React, {useEffect, useState} from 'react';
import {CardsRender} from "../Cards/CardsRender";
import {initialCards} from "../../Data/defaultCards.js";
import { motion } from "framer-motion"

export function HomePage() {
    const [move, setMove] = useState(true);
    useEffect(()=>{ const interval = setInterval(()=>{setMove(!move);},1000); return ()=> clearInterval(interval);},[move]);
    return (
        <>
            <div className={"container-fluid p-5 vh-100 bg-image backgroundImageHomePage"}>
                <div className={"bg-opacity-75 text-start w-50 bg-dark text-bg-secondary"}>
                    <h2 className={"mt-2 font-monospace text-decoration-underline"}>Businesses From All Kinds</h2>
                    <h5 className={"mt-3 font-monospace"}>In this site you can explore and find businesses from all the kinds, get started and add to your favorites list</h5>
                </div>
                <div>
                    <motion.div
                        animate={{ x: move ? -200: 200}}
                        transition={{type: "spring", stiffness: 5}}
                    >
                        <div style={{display:'flex', justifyContent:'center'}} className={"container-fluid content p-3 bg-opacity-75"}>
                            <CardsRender cardsArray={initialCards} isEditMode={false}/>
                        </div>
                    </motion.div>
                </div>
            </div>

        </>
    )
}