import React from 'react';
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'


const Footer = () => {
    return (
        <div style={{margin:"40px"}}>
            <span>
                <a href={"https://github.com/Enescyc"}>
                    <FaGithubSquare style={{width:"48px",height:"48px"}}/>
                </a>
                <a href={"https://www.linkedin.com/in/muhammed-enes-%C5%9Fahin-8a882717b/"}>
                     <FaLinkedin style={{width:"48px",height:"48px"}}></FaLinkedin>
                </a>
            </span>
        </div>
    );
};

export default Footer;
