import Card from "@mui/material/Card";
import { CardContent, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";



export function CardsRender({cardsArray, isEditMode}) {
    return (
        <>
            <div className={'d-inline-flex container-fluid'} style={{marginTop:'100px'}}>
            {cardsArray.map(x=>
                <>
                        <Card style={{width:'300px',minHeight:'400px', margin:'10px'}}>
                            <CardMedia
                                sx={{height: 140}}
                                image= {x.businessImage}
                                title='this is my title'
                            />
                            <CardContent style={{paddingBottom:'5px'}}>
                                <div style={{height:'80px'}}>
                                    <Typography gutterBottom variant="h5" component='div'>
                                        {x.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {x.description}
                                    </Typography>
                                </div>
                                <div style={{marginTop:'20px', height:'130px'}}>
                                    <div>
                                        <Typography variant="h5" fontSize='17px' fontWeight='medium' color="text.primary">Address</Typography>
                                        <span style={{fontSize:'16px'}}>{x.address}</span>
                                    </div>
                                    <div style={{marginTop:'8px'}}>
                                        <Typography variant="h6" fontSize='17px' color="text.primary">Phone</Typography>
                                        <span style={{fontSize:'16px'}}>{x.phone}</span>
                                    </div>
                                </div>
                                <div className={"d-inline-flex container-fluid mb-2 p-0"}>
                                    <div className={"col-6"}>
                                        {
                                            isEditMode &&
                                            <>
                                                <div className={'text-start'}>
                                                    <MdDelete style={{marginRight:'10px'}} color={'grey'} size={30}/>
                                                    <BsFillPencilFill color={'grey'} size={25}/>
                                                </div>
                                            </>
                                        }
                                    </div>
                                    <div className={"col-6"}>
                                        <div  className={'text-end'}>
                                            <BsFillTelephoneFill style={{marginRight:'10px'}} color={'grey'} size={25}/>
                                            <AiFillHeart color={'grey'} size={30}/>
                                        </div>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                </>
            )}
            </div>
        </>
    )
}