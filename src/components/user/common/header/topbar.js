import React from 'react'
import { FaEnvelopeOpen, FaFacebook, FaHeadphonesAlt, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import settings from '../../../../helpers/settings'

const Topbar = () => {
    return (
        <div className='topbar'>
            <ul className="contact-bar">
                <li><a href={`tel:${settings.phone1}`}><FaHeadphonesAlt /> {settings.phone1}</a></li>
                <li><a href={`mailto:${settings.email}`}><FaEnvelopeOpen /> {settings.email}</a></li>
            </ul>
            <ul className="social-bar">
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
            </ul>
        </div>
    )
}

export default Topbar