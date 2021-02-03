import React from 'react'

import { Grid, 
    Typography,
    Card, 
    CardActionArea, 
    CardMedia, 
    CardContent, 
    Grow, 
    DialogTitle,
    Dialog, 
    DialogContent,
    DialogActions} from '@material-ui/core';
import './Speaking.css';
import {useState} from "react";

import resumeData from '../../utils/resumeData';

const Speaking = () => {

    const [talkDialog, setTalkDialog] = useState(false)

 

    return (
        <>

        {/*Blogs*/}
        <Grid container xs={12} className="section pb_45 pt_45">
            

            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {resumeData.speaking.map(talk =>(
                        <>
                        <Grid item>
                            <Grow in timeout={1000}>
                                <Card className='eventCard' onClick ={() => setTalkDialog(talk)}>
                                    <CardActionArea>
                                        <CardMedia className = 'eventCard_image' image={talk.image} title={talk.title}/>
                                        <CardContent>
                                            <Typography className='eventCard_title'>{talk.title}</Typography>
                                            <Typography variant='body2' className='eventCard_title'>{talk.eventName}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grow>
                        </Grid>
                        </>
                    ))}
                </Grid>
            </Grid>

            <Dialog open={talkDialog} onClose={() => setTalkDialog(false)} >
                <DialogTitle onClose={() => setTalkDialog(false)}>
                    <Typography>{talkDialog.title} : {talkDialog.eventName}</Typography>
                </DialogTitle>
                
                <DialogContent>
                    <img className='dialogImage' src={talkDialog.image} alt=""/>
                    <Typography variant='body2'>Date: {talkDialog.date}<br/><br/></Typography>
                    <Typography>{talkDialog.description}</Typography>
                </DialogContent>

                <DialogActions>
                    {talkDialog?.links?.map((link)=> (
                        <a href={link.link} target ="_blank">
                            {link.icon}
                        </a>
                    ))}
                </DialogActions>
            </Dialog>

        </Grid>
        </>
    )
}

export default Speaking
