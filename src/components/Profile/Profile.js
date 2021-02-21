import {Typography } from '@material-ui/core'

import React from 'react'
import testImage from "../../assets/images/profile_image.png";
import './Profile.css'
import CustomTimeline, {CustomTimelineSeperator} from "../Timeline/CustomTimeline";
import CustomButton from "../Button/CustomerButton"
import PersonOutlineIcon from '@material-ui/icons/Person';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';



import resumeData from '../../utils/resumeData'

const CustomTimelineItem = ({title, text, link}) =>(
    <TimelineItem>
        <CustomTimelineSeperator/>
        <TimelineContent>
            {link ? (
                <Typography className= 'timelineItem_text'>
                    <span>{title}</span> <a href={link} target= "_blank"></a>
                </Typography>
            ) : (
                <Typography className= 'timelineItem_text'>
                    {<span>{title}</span>} {text}
                </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
);

const Profile = () => {
    return (
        <div className = 'profile container_shadow'>
            <div className='profile_name'>
            <Typography className='name'>{resumeData.name}</Typography>
            <Typography className='title'>{resumeData.title}</Typography>
            </div>
            
            <figure className ='profile_image'>
                <img src={testImage}/>
            </figure>

            <div className='profile_information'>
                <CustomTimeline icon={<PersonOutlineIcon/> }>
                    <CustomTimelineItem title="Name" text={resumeData.name}></CustomTimelineItem>
                    <CustomTimelineItem title="Job Title" text={resumeData.job_role}></CustomTimelineItem>
                    <CustomTimelineItem title="Company" text={resumeData.company}></CustomTimelineItem>
                    <CustomTimelineItem title="Email" text={resumeData.email}></CustomTimelineItem>
                </CustomTimeline>
                
                <div className={'btn_container'}>
                    <CustomButton text="Download CV" icon={<SystemUpdateAltIcon/>}>
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Profile