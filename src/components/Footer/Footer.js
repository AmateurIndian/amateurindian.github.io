import React from 'react'
import './Footer.css'
import resumeData from '../../utils/resumeData'
import  {Typography} from '@material-ui/core'


const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <Typography className='footer_right'>{resumeData.name}</Typography>
            </div>

            <div>
                <Typography className='footer_left'>
                    Design and Developed by {" "}
                    <a href={resumeData.social.linkedin.link}  target="_blank">Sarjeel Yusuf</a>
                    <br/>
                    Resume inspired by {" "}
                    <a href={"https://www.youtube.com/channel/UCSEy8lBnjp42x5W1JPcca0w"} target="_blank">Salmaan Fazal</a>
                </Typography>

            </div>
        </div>
    )
}

export default Footer