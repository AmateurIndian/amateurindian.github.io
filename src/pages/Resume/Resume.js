import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import CustomTimeline, {CustomTimelineSeperator} from "../../components/Timeline/CustomTimeline";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import resumeData from '../../utils/resumeData'
import TimelineContent from '@material-ui/lab/TimelineContent';
import CardMembershipIcon from '@material-ui/icons/CardMembership'

import './Resume.css'

const Resume = () => {
    return (

        <>
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>About</h6>
                </Grid>

                <Typography  variant='subtitle1' className='timeline_description'>
                An engineer turned product manager at Atlassian and AWS community buulder. Greatly passionate about building disruptive products, and leveraging cloud computing and everything DevOps.
                Can be found talking about technology and philosophy while laughing at the comedies of life.
                </Typography>
            </Grid>

            {/* Experiance/Eduction */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>Resume</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className='resume_timeline'>
                        
                        {/*Experiance*/}
                        <Grid item sm={12} md={7}>
                            <CustomTimeline title={'Work Experiance'} icon={<WorkIcon/>}>

                                {Object.keys(resumeData.work).map((experiance) => (
                                    
                                    <TimelineItem>
                                        <CustomTimelineSeperator className='sperator_padding'>
                                            <TimelineDot variant='outlined' className='timeline_dot'/>
                                            <TimelineConnector/>
                                        </CustomTimelineSeperator>
                                        <TimelineContent>
                                            <Typography className='timeline_title'>{resumeData.work[experiance].job } - {resumeData.work[experiance].company}</Typography>
                                            <Typography className='timeline_date'>{resumeData.work[experiance].date}</Typography>
                                            <Typography  variant='body2' className='timeline_description'>{resumeData.work[experiance].description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>

                                ))}
                            </CustomTimeline>
                        </Grid>

                        {/*Education/Certificates*/}
                        <Grid item  sm={12} md={5}>
                            <CustomTimeline title={'Education'} icon={<SchoolIcon/>}>

                            {Object.keys(resumeData.education).map((school) => (
                                    
                                    <TimelineItem>
                                        <CustomTimelineSeperator className='sperator_padding'>
                                            <TimelineDot variant='outlined' className='timeline_dot'/>
                                            <TimelineConnector/>
                                        </CustomTimelineSeperator>
                                        <TimelineContent>
                                            <Typography className='timeline_title'>{resumeData.education[school].degree } <br/> <span>{resumeData.education[school].institution}</span></Typography>
                                            <Typography className='timeline_date'>{resumeData.education[school].date}</Typography>
                                            <Typography  variant='body2' className='timeline_description'>{resumeData.education[school].description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>

                                ))}
                            </CustomTimeline>
                            
                            {/*Certification*/}
                            <CustomTimeline title={'Certification & Achievements'} icon={<CardMembershipIcon/>}>

                                {Object.keys(resumeData.certification).map((cert) => (
                                    
                                    <TimelineItem>
                                        <CustomTimelineSeperator className='sperator_padding'>
                                            <TimelineDot variant='outlined' className='timeline_dot'/>
                                            <TimelineConnector/>
                                        </CustomTimelineSeperator>
                                        <TimelineContent>
                                        
                                            <figure className='cert_image_container'>
                                                <img className='cert_image' src={resumeData.certification[cert].image}/>
                                            </figure>
                                            <Typography className='cert_title'>
                                                <a href={resumeData.certification[cert].link}>
                                                    {resumeData.certification[cert].level}
                                                </a>
                                                <br/>
                                                <span>{resumeData.certification[cert].issuer}</span>
                                            </Typography>
                                            <Typography className='timeline_date'>{resumeData.certification[cert].date}</Typography>
                                        
                                        </TimelineContent>
                                    </TimelineItem>

                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </>

    )
        

}

export default Resume