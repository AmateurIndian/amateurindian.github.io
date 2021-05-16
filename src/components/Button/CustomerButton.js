import React from 'react'
import  {Button} from '@material-ui/core' 
import './CustomButton.css'
import pdf from '../../assets/documents/syusuf_CV.pdf'

const CustomButton = ({text, icon, link}) => {
    return (
       <Button 
        className= {'custom_btn'} 
        href =  {pdf}
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