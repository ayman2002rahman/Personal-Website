import logo from "../assets/yoruult.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si';
import { CIcon } from '@coreui/icons-react';
import { cibSpotify } from '@coreui/icons';

import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 item-center">
                <img className="mx-2 w-10" src={logo} alt="logo"/>
            </div>
            <div className="m-8 flex item-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/ayman-awsaf-rahman/"
                    target="_blank" 
                    rel="noopener noreferrer"
                ><FaLinkedin/></a>
                <a href="https://github.com/ayman2002rahman"
                    target="_blank" 
                    rel="noopener noreferrer"
                ><FaGithub/></a>
                <a href="https://leetcode.com/u/ayman2002rahman/"
                    target="_blank" 
                    rel="noopener noreferrer"
                ><SiLeetcode/></a>
                <a href="https://open.spotify.com/user/arahman621?si=8dab615503464fd0"
                    target="_blank" 
                    rel="noopener noreferrer"
                ><CIcon icon={cibSpotify} className="w-6 h-6 text-white"/></a>
                <a href="#"
                    target="_blank" 
                    rel="noopener noreferrer"
                ><FaInstagram/></a>
            </div>
        </nav>
    )
};