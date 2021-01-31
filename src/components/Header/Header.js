import React from 'react'
import {
    Button,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {link, NavLink, withRouter} from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import './Header.css'
import resumeData from '../../utils/resumeData'
import { Typography } from '@material-ui/core';



const Header = (props) => {
    const pathName = props.location.pathname;

    console.log(props.location)

    return (

        <Navbar expand="lg" sticky='top' className={'header'}>
        {/* Home Link */}
        <Nav.Link as={NavLink} to="/" className='header_navlink'>
            <Navbar.Brand className='header_home'>
                <HomeRoundedIcon/>
            </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle></Navbar.Toggle>

        <Navbar.Collapse>

            {/*Resume Link*/}
            <Nav>
                <Nav.Link as={NavLink} to='/' className={
                    pathName == '/' ? 'header_link_active' : 'header_link'
                }>
                    Resume
                </Nav.Link>
            </Nav>

            {/*Portfolio Link*/}
            <Nav className='header_left'>
                <Nav.Link as={NavLink} to='/portfolio' className={
                    pathName === '/portfolio' ? 'header_link_active' : 'header_link'
                }>
                    Blogs&Publications
                </Nav.Link>
            </Nav>

            <div className='header_right'>
                {Object.keys(resumeData.social).map((key) => (
                    <a href ={resumeData.social[key].link} target= '_blank'>
                        {resumeData.social[key].icon}
                    </a>
                ))}

            </div>
        </Navbar.Collapse>

        </Navbar>
    )  
}

export default withRouter(Header);