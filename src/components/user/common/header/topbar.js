import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaHeadphonesAlt, FaRegEnvelopeOpen } from "react-icons/fa";
import settings from '../../../../helpers/settings';


const Topbar = () => {
    return (
        <div className="topbar">
            <ul className="contact-bar">
                <li><a href={`tel:${settings.phone1}`}><FaHeadphonesAlt /> {settings.phone1}</a></li>
                <li className="d-none d-md-inline" ><a href={`mailto:${settings.email}`}><FaRegEnvelopeOpen /> <span>{settings.email}</span></a></li>
            </ul>
            <ul className="social-bar">
                <li><a href="https://instagram.com" target="_blank" rel='noreferrer'><FaInstagram /></a></li>
                <li className="d-none d-md-inline"><a href="https://facebook.com" target="_blank" rel='noreferrer'><FaFacebook /></a></li>
                <li><a href="https://linkedin.com" target="_blank" rel='noreferrer'><FaLinkedin /></a></li>
                <li className="d-none d-md-inline"><a href="https://twitter.com" target="_blank" rel='noreferrer'><FaTwitter /></a></li>
                <li><a href="https://youtube.com" target="_blank" rel='noreferrer'><FaYoutube /></a></li>
            </ul>
        </div>
    )
}

export default Topbar