import Card from "@mui/material/Card";
import { CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";




export function CardsRender({isEditMode, favFunction, phoneFunction, deleteFunction, editFunction,cardID,cardTitle,cardDesc,cardPhone,cardAddress,cardAlt,cardImageUrl,isFavorite}) {
    return (
        <>
            {/*<div className={'d-inline-flex container-fluid'}>*/}
                        <Card  style={{width:'300px',minHeight:'400px', margin:'10px'}}>
                            <CardMedia
                                sx={{height: 140}}
                                image= {cardImageUrl}
                                title={cardAlt}
                            />
                            <CardContent style={{paddingBottom:'5px'}}>
                                <div style={{height:'80px'}}>
                                    <Typography gutterBottom variant="h5" component='div'>
                                        {cardTitle}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {cardDesc}
                                    </Typography>
                                </div>
                                <div style={{marginTop:'20px', height:'130px'}}>
                                    <div>
                                        <Typography variant="h5" fontSize='17px' fontWeight='medium' color="text.primary">Address</Typography>
                                        <span style={{fontSize:'16px'}}>{cardAddress.city + ', ' + cardAddress.street + ', ' + cardAddress.houseNumber}</span>
                                    </div>
                                    <div style={{marginTop:'8px'}}>
                                        <Typography variant="h6" fontSize='17px' color="text.primary">Phone</Typography>
                                        <span style={{fontSize:'16px'}}>{cardPhone}</span>
                                    </div>
                                </div>
                                <div className={"d-inline-flex container-fluid mb-2 p-0"}>
                                    <div className={"col-6"}>
                                        {
                                            isEditMode &&
                                            <>
                                                <div className={'text-start'}>
                                                    <MdDelete card-id={cardID} onClick={deleteFunction} style={{marginRight:'10px',cursor:'pointer'}} color={'grey'} size={30}/>
                                                    <BsFillPencilFill card-id={cardID} style={{cursor:'pointer'}} onClick={editFunction} color={'grey'} size={25}/>
                                                </div>
                                            </>
                                        }
                                    </div>
                                    <div className={"col-6"}>
                                        <div  className={'text-end'}>
                                            <BsFillTelephoneFill card-id={cardID} style={{marginRight:'10px',cursor:'pointer'}} onClick={phoneFunction} color={'grey'} size={25}/>
                                            <AiFillHeart card-id={cardID} style={{cursor:'pointer'}} onClick={favFunction} color={isFavorite ? 'red':'grey'} size={30}/>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
            {/*</div>*/}
        </>
    )
}