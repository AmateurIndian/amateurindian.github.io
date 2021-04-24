import React from 'react'
import  {Button} from '@material-ui/core' 
import './CustomButton.css'

const CustomButton = ({text, icon, link}) => {
    return (
       <Button 
        className= {'custom_btn'} 
        href =  'https://sarjeelyusufcv.s3.eu-central-1.amazonaws.com/syusuf_CV.pdf'
        target = "_blank"
        endIcon={icon ? 
        (<div className='btn_icon_container'>
            {icon}
        </div>)
        : null}
        >
           <span className='btn_text'>{text}</span> 
       </Button>
    )
        

}

export default CustomButton