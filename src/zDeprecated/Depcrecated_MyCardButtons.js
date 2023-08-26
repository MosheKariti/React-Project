import Button from "@mui/material/Button";
import React, {useEffect, useState} from "react";

export function Depcrecated_MyCardButtons({setPageState}) {
    const [tab,setTab] = useState(null);
    const buttons = ['View','Create Card'];
    return (
        <>
            <div className={'d-inline-flex'}>
                {buttons.map((x)=>
                    <Button onClick={()=>{setTab(x); setPageState(x);}} color="primary" variant="outlined" style={tab === x ? clickedButtonStyle:basicButtonStyle}>{x}</Button>
                )}
            </div>
        </>
    )
}
const basicButtonStyle = {
    backgroundColor:'rgb(255,255,255)',
    borderRadius:'0px',
    borderBottom:'none',
    border:'none',
    textTransform: 'none',
    fontWeight:"bold",
    fontSize:"15px",
    padding:'10',
    textAlign: 'center'
}
const clickedButtonStyle = {...basicButtonStyle, borderBottom:'solid'};




